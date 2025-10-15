import React from "react";

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">About Me</h2>

        {/* Personal Information */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <p><strong>Name:</strong> Mahmoud Rabie</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Address:</strong> Cairo - Nasr City | Minya - Mallawi</p>
            <p><strong>Education:</strong> Faculty of Law, Assiut University</p>
            <p><strong>Courses:</strong> Introduction to Software, Front-End Development</p>
          </div>
        </div>

        {/* Description */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="fs-5 text-justify">
              I am a passionate Front-End Developer with strong knowledge in modern web
              technologies. I specialize in building responsive, interactive, and user-friendly
              applications using the latest tools and frameworks. I enjoy transforming ideas into
              digital solutions that deliver real value.
            </p>
            <p className="fs-5 text-justify">
              Throughout my journey, I have developed multiple projects that showcase my ability
              to create structured, scalable, and clean code. I focus on problem-solving,
              performance optimization, and delivering high-quality user experiences.
            </p>
            <p className="fs-5 text-justify">
              I am highly motivated to continue learning and improving my skills. I stay up-to-date
              with the latest trends in web development and aim to contribute to impactful projects
              that challenge me to grow both personally and professionally.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <h3 className="mb-3 fw-bold">My Skills & Technologies</h3>
            <div className="d-flex flex-wrap gap-3">
              {[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React.js",
                "Redux",
                "React Router",
                "Bootstrap",
                "Git & GitHub",
                "APIs",
                "Responsive Design",
                "Clean Code",
                "Problem Solving",
              ].map((skill, index) => (
                <button
                  key={index}
                  className={`btn ${
                    darkMode ? "btn-outline-light" : "btn-outline-primary"
                  }`}
                  style={{ transition: "0.3s" }}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
