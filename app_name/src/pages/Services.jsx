import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import serviceImg from "../assets/services.jpg";
import "animate.css";
import Objectives from './Objectives'

import { FaChalkboardTeacher, FaRocket, FaUsers, FaComments, FaGlobe, FaLaptopCode, FaBrain } from "react-icons/fa";
const heroImg = "../assets/hero.jpg";
const Services = () => {
    const serviceData = [
  {
    title: "One-on-one Peer Training",
    description:
      "Get personalized academic or professional writing support from trained peer mentors.",
    icon: <FaChalkboardTeacher size={40} className="text-orange mb-3" />, 
    delay: "0s",
  },
  {
    title: "Group Peer Training",
    description:
      "Join dynamic classroom sessions to enhance your academic and professional capabilities.",
    icon: <FaUsers size={40} className="text-orange mb-3" />, 
    delay: "0.2s",
  },
  {
    title: "Connect Wide",
    description:
      "Engage with industries through events, talks, and research interactions.",
    icon: <FaGlobe size={40} className="text-orange mb-3" />, 
    delay: "0.4s",
  },
  {
    title: "Communication Lab",
    description:
      "Explore flexible online learning modules and micro-credential workshops at your own pace.",
    icon: <FaLaptopCode size={40} className="text-orange mb-3" />, 
    delay: "0.6s",
  },
  {
    title: "Psychometric Assessments",
    description:
      "Enhance your self-awareness and decision-making with tailored psychometric testing.",
    icon: <FaBrain size={40} className="text-orange mb-3" />, 
    delay: "0.8s",
  },
];

  return (
    <>
      <Nav_bar />
                   <main className="container py-5 animate__animated animate__fadeIn">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-uppercase">What We Offer</h2>
          <p className="text-muted fs-5">Skill-building for a smarter, confident you</p>
        </div>
        <div className="row g-4">
          {serviceData.map((service, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div
                className="card border-0 shadow-lg h-100 text-center p-4 animate__animated animate__fadeInUp cneter-image"
                style={{ animationDelay: service.delay }}
              >
                <div className="center-image">   {service.icon}</div>
             
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{service.title}</h5>
                  <p className="card-text text-muted small">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

                  <Objectives></Objectives>

      <main className="container py-5">
        <section className="text-center mb-5">
          <h2 className="fw-bold display-6 text-uppercase">Get In Touch</h2>
          
        </section>

        <div className="row text-center g-4 ">
       
          <div className="col-md-4 center-image">
            <div className="card shadow-lg border-0 h-100 p-4 animate__animated animate__zoomIn animate__delay-1s">
              <h5 className="fw-bold mb-2">Professional Growth</h5>
              <p className="text-muted small">
                Real-world skills through communication labs, psychometric assessments, and placement readiness.
              </p>
              <form className="mt-3">
                <input type="text" className="form-control mb-2" placeholder="Your Name" />
                <input type="email" className="form-control mb-2" placeholder="Your Email" />
                <textarea className="form-control mb-2" placeholder="Your Query"></textarea>
                <button type="submit" className="btn btn-sm btn-outline-primary">Contact</button>
              </form>
            </div>
          </div>

        </div>
     

      </main>
      <Footer />
    </>
  );
};

export default Services;
