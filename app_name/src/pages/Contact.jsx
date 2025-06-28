import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import "animate.css";
import { FaRocket, FaUsers, FaComments } from "react-icons/fa";
const visionImg = "assets/hero.jpg";

const Contact = () => {
  return (
    <>
      <Nav_bar />
            <main className="container py-5">
        {/* Vision & Mission Section */}
        <section className="my-5 animate__animated animate__fadeInUp">
          <h3 className="fw-bold text-uppercase text-center mb-4">Our Vision & Mission</h3>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={visionImg}
                alt="Vision and Mission"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <div className="bg-white p-4 shadow rounded">
                <h5 className="fw-bold text-orange">Vision</h5>
                <p className="text-muted">
                  Our vision is to be a benchmark in global academic circles in providing professional and academic-based solutions to in-house as well as external patrons. We aim to inspire and empower individuals to make meaningful contributions to society through learning and leadership.
                </p>
                <h5 className="fw-bold text-orange mt-4">Mission</h5>
                <p className="text-muted">
                  Our mission is to provide a shared platform for the entire university to exchange knowledge and experience, in order to harness expertise in the academic as well as professional spheres. CAPS is dedicated to enabling learners, faculty, and staff to grow through collaboration, creativity, and service.
                </p>
                <h5 className="fw-bold text-orange mt-4">Passion Required</h5>
                <p className="text-muted">
                  We seek individuals with a passion for learning, collaboration, service, and innovation. Your commitment to making a difference and growing through peer training, mentoring, and teamwork is what makes CAPS thrive. Whether you're a communicator, organizer, researcher, or creative thinker — there's a place for you here.
                </p>
                <h5 className="fw-bold text-orange mt-4">What We Look For</h5>
                <ul className="text-muted ps-3">
                  <li>Curiosity to learn and share knowledge</li>
                  <li>Initiative to take responsibility and lead</li>
                  <li>Empathy and patience in peer interactions</li>
                  <li>Commitment to volunteering and co-curricular engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="my-5 animate__animated animate__fadeInUp">
          <h3 className="fw-bold text-uppercase text-center mb-4">Join Us</h3>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="bg-light p-5 shadow rounded">
                <p className="text-muted text-center mb-4">
                  Ready to be part of a community that nurtures growth, leadership, and service? Join CAPS and take the next step in your academic and professional journey.
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Email Address" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Phone Number" required />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select" required>
                        <option value="">Select Interest Area</option>
                        <option value="Academic Excellence">Academic Excellence</option>
                        <option value="Professional Growth">Professional Growth</option>
                        <option value="Community Leadership">Community Leadership</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows="4" placeholder="Tell us why you want to join CAPS" required></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-orange px-4 py-2 mt-2">Apply Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
