import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import "animate.css";
import "./../css/objectives.css"; // Import custom CSS for styling
import { FaHandsHelping, FaLightbulb, FaUserGraduate, FaBookOpen, FaLaptop } from "react-icons/fa";

const Objectives = () => {

  const objectivesData = [
  {
    title: "Promote Volunteering",
    description: "Encourage peer training and community-based service learning.",
    icon: <FaHandsHelping size={40} className="text-orange mb-3" />, 
    delay: "0s",
  },
  {
    title: "Raise Awareness",
    description: "Emphasize the importance of academic and professional excellence.",
    icon: <FaLightbulb size={40} className="text-orange mb-3" />, 
    delay: "0.2s",
  },
  {
    title: "Empower Through Support",
    description: "Help students in writing, research, placement prep and presentations.",
    icon: <FaUserGraduate size={40} className="text-orange mb-3" />, 
    delay: "0.4s",
  },
  {
    title: "Complement Curriculum",
    description: "Fill gaps in learning and ensure holistic development of individuals.",
    icon: <FaBookOpen size={40} className="text-orange mb-3" />, 
    delay: "0.6s",
  },
  {
    title: "Interactive Learning",
    description: "Foster a 24×7 dynamic learning environment for all.",
    icon: <FaLaptop size={40} className="text-orange mb-3" />, 
    delay: "0.8s",
  },
];

  return (
    <>
   <main className="container py-5 animate__animated animate__fadeIn">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-uppercase fw-bold display-5 text-uppercase animate__animated animate__backInDown">Our Objectives</h2>
          <p className="text-muted fs-5">Guiding principles that shape our impact</p>
        </div>
        <div className="row g-4">
          {objectivesData.map((objective, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div
                className="card border-0 shadow-lg h-100 text-center p-4 animate__animated animate__fadeInUp"
                style={{ animationDelay: objective.delay }}
              >
                <div className="center-image">
                {objective.icon}</div>
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{objective.title}</h5>
                  <p className="card-text text-muted small">{objective.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Objectives;