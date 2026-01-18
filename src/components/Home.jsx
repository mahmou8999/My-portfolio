import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home({ darkMode }) {
  const [fullImage, setFullImage] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/MyCV.pdf";
    link.download = "Mahmoud_Rabie_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className={`d-flex align-items-center justify-content-center min-vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      } home-section`}
    >
      <div className="container d-flex flex-lg-row flex-column align-items-center gap-5 py-5">
        <div className="flex-fill text-center">
          <img
            src="me.jpg"
            alt="Profile"
            className={`rounded-circle profile-img ${animate ? "fade-in" : ""}`}
            onClick={() => setFullImage(true)}
          />
        </div>

        <div className="flex-fill text-center text-lg-start">
          <h1 className="mb-3">Mahmoud Rabie</h1>
          <h3 className="mb-4">Front-End Developer</h3>
          <p className="mb-4 description">
            I'm Mahmoud Rabie, a Front-End Developer passionate about creating
            modern, responsive,<br />
            and user-friendly websites using React and Bootstrap. I focus on
            clean<br />
            code, elegant design, and continuous learning to deliver
            high-quality digital experiences.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
            <button
              className={`btn ${
                darkMode ? "btn-outline-light" : "btn-primary text-white"
              }`}
              onClick={handleScrollToContact}
            >
              Contact Me
            </button>

            <button
              className={`btn ${
                darkMode ? "btn-outline-light" : "btn-primary text-white"
              }`}
              onClick={downloadCV}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {fullImage && (
        <div className="image-modal" onClick={() => setFullImage(false)}>
          <img src="me.jpg" alt="Full Profile" className="full-image" />
          <button className="close-btn" onClick={() => setFullImage(false)}>
            ×
          </button>
        </div>
      )}
    </section>
  );
}

export default Home;
