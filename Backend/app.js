const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const fs = require('fs-extra'); // Use fs-extra for better file handling
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const Student = require('./models/Student');
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
    //error
cors.bind
app.use(function(req, res, next) {
    console.log(req.headers.origin);
    console.log(req.headers.referer);
    // if (req.headers.origin == 'http://localhost:4200' || req.headers.referer == 'http://localhost:4200/') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Type, Accept');
    next();
    // } else {
    //     return res.sendStatus(401)
    // }
})
app.use(function(req, res, next) {
    console.log(req.headers.authorization);
    if (req.headers.authorization != '') {
        next()
    }
})
const serves = app.listen(3010, () => {})
mongoose.connect('mongodb+srv://mpratyush54:ybrc6qjdDRngD7R5@cluster0.kbtrgle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));
require('dotenv').config();



const API_KEY = 'tFstggP00RcEgq69OHSYvtz3bk93gRhp13sBRK3K'; // Replace with your NASA API Key
const BASE_URL = 'https://api.nasa.gov/planetary/apod/';

const dateArg = process.argv[2]; // Optional date input: '2025-06-21'
const fetchDate = dateArg || new Date().toISOString().split('T')[0]; // Default: today
function isFutureDate(dateStr) {
  const today = new Date().toISOString().split('T')[0];
  return dateStr > today;
}
if (isFutureDate(fetchDate)) {
  console.log(`🚫 Cannot fetch future date: ${fetchDate}`);
  return;
}

async function downloadAPOD(date) {
  try {
    const url = `${BASE_URL}?api_key=${API_KEY}&date=${date}`;
    console.log(url);
    
    const { data } = await axios.get(url);
    console.log(data);
    
    if (!data.url || data.media_type !== 'image') {
      console.warn(`No image available for ${data}`);
      return;
    }

    const imageUrl = data.hdurl || data.url;
    const dateParts = date.split('-');
    const [year, month, day] = dateParts;

    const imageFolder = path.join(__dirname, 'images', year, month);
    const imageExt = path.extname(imageUrl).split('?')[0] || '.jpg';
    const imagePath = path.join(imageFolder, `${day}${imageExt}`);
    console.log(imageFolder);
    
    await fs.ensureDir(imageFolder);

    const response = await axios.get(imageUrl, { responseType: 'stream' });
    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log(`✅ Saved APOD for ${date} → ${imagePath}`);
  } catch (err) {
    console.error(`❌ Error fetching APOD for ${date}:`, err.message);
  }
}

downloadAPOD(fetchDate)


// Task 2
app.post('/api/students',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('rollNumber').notEmpty().withMessage('Roll number is required'),
    body('department').notEmpty().withMessage('Department is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('dob').isISO8601().toDate().withMessage('Valid date of birth required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// 🔍 Get All Students or Filter by Department
app.get('/api/students', async (req, res) => {
  const filter = {};
  if (req.query.department) filter.department = req.query.department;

  try {
    const students = await Student.find(filter);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🌐 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

