import Nav_bar from "../components/Nav_bar";
import Footer from "../components/Footer";
import "animate.css";
const alumni1 = "assets/aluminai.jpeg";
const alumni2 = "assets/aluminai2.jpeg";
const alumni3 = "assets/aluminai3.jpeg";
const alumni4 = "assets/aluminai4.jpeg";
const alumni5 = "assets/aluminai5.jpeg";

const Alumni = () => {
  const alumniList = [
  {
    name: "Prithul Chaturvedi",
    role: "Statistical Analyst",
    org: "Eli Lilly & Co.",
    img: alumni1,
    delay: "0s",
  },
  {
    name: "Pooja Rajkumari",
    role: "CEWS Member",
    org: "Benzinga",
    img: alumni2,
    delay: "0.2s",
  },
  {
    name: "Shreya Kar",
    role: "HR Intern",
    org: "MiQ Digital India",
    img: alumni3,
    delay: "0.4s",
  },
  {
    name: "Krishnendhu Shibu",
    role: "Team Lead",
    org: "CAPS",
    img: alumni4,
    delay: "0.6s",
  },
  {
    name: "Sushant Prasad",
    role: "Analyst",
    org: "Accenture",
    img: alumni5,
    delay: "0.8s",
  },
];

  return (
    <>
      <Nav_bar />
<main className="container py-5 animate__animated animate__fadeIn">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-uppercase">Our Alumni</h2>
          <p className="text-muted fs-5">Proud journeys of excellence and growth</p>
        </div>
        <div className="row g-4">
          {alumniList.map((alum, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div
                className="card border-0 shadow-lg h-100 text-center p-3 animate__animated animate__fadeInUp"
                style={{ animationDelay: alum.delay }}
              >
                <img
                  src={alum.img}
                  alt={alum.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{alum.name}</h5>
                  <p className="card-text text-muted mb-1">{alum.role}</p>
                  <p className="card-text small text-orange">{alum.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Alumni;
