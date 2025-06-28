import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Objectives from "./pages/Objectives";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/Join-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
