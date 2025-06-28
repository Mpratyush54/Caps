import Nav_bar from "../components/Nav_bar";
import Hero from "../components/hero";
import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";
import heroImg from "../assets/services.jpg";
import '../css/home.css';
import { FaRocket, FaUsers, FaComments } from "react-icons/fa";
import "animate.css";

const Home = () => {
  return (
    <>
      <Nav_bar />
             <header
        className="position-relative text-white text-center d-flex align-items-center justify-content-center moveup"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-4 rounded animate__animated animate__fadeInDown">
          <h1 className="display-4 fw-bold text-uppercase">Welcome to CAPS</h1>
          <p className="lead">Centre for Academic and Professional Support</p>
          <a href="/services" className="btn btn-outline-light mt-3 px-4 py-2 fw-semibold">
            Explore Our Services
          </a>
        </div>
      </header>

      <main className="container py-5">
        <section className="text-center mb-5">
          <h2 className="fw-bold display-6 text-uppercase">Empowering Your Journey</h2>
          <p className="text-muted fs-5">
            CAPS fosters students’ holistic growth through training, mentoring, peer support and co‑curricular activities.
          </p>
        </section>

        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card shadow-lg border-0 h-100 p-4 animate__animated animate__zoomIn">
              <h5 className="fw-bold mb-2">Academic Excellence</h5>
              <p className="text-muted small">
                Structured support in writing, research formatting, and more to enhance your academic performance.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg border-0 h-100 p-4 animate__animated animate__zoomIn animate__delay-1s">
              <h5 className="fw-bold mb-2">Professional Growth</h5>
              <p className="text-muted small">
                Real-world skills through communication labs, psychometric assessments, and placement readiness.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg border-0 h-100 p-4 animate__animated animate__zoomIn animate__delay-2s">
              <h5 className="fw-bold mb-2">Community & Leadership</h5>
              <p className="text-muted small">
                Be part of a collaborative environment, share knowledge, and grow through volunteer initiatives.
              </p>
            </div>
          </div>
        </div>
        





        <section className="my-5 text-center animate__animated animate__fadeInUp animate__animated animate__zoomIn ">
          <h3 className="fw-bold text-uppercase mb-4">Why Choose CAPS?</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-light h-100 animate__animated animate__zoomIn animate__delay-1s">
                <FaRocket className="text-orange mb-3" size={40} />
                <h6 className="fw-semibold">Accelerated Skill Growth</h6>
                <p className="small text-muted">Fast-track your personal and professional skills through our structured support.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-light h-100 animate__animated animate__zoomIn animate__delay-2s">
                <FaUsers className="text-orange mb-3" size={40} />
                <h6 className="fw-semibold">Vibrant Peer Community</h6>
                <p className="small text-muted">Collaborate, lead and learn with peers and mentors in a friendly space.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-light h-100 animate__animated animate__zoomIn animate__delay-3s">
                <FaComments className="text-orange mb-3" size={40} />
                <h6 className="fw-semibold">Real-time Mentorship</h6>
                <p className="small text-muted">Immediate help and continuous growth with accessible mentoring.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      {/* <Hero />
      <About />
      <Events />*/}
      
      <Footer /> 
    </>
  );
};

export default Home;
