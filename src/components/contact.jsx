import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name))
      newErrors.name = "Name must be at least 3 letters and contain only alphabets.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters long.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      window.location.href = `mailto:mahmoud.rabie2512@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className={`contact-section py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center mb-5">
          I’d love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
        </p>

        <div className="row g-4">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
              ></textarea>
              {errors.message && <small className="text-danger">{errors.message}</small>}

              <button
                type="submit"
                className={`custom-btn ${darkMode ? "custom-btn-dark" : "custom-btn-light"}`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 d-flex flex-column justify-content-center gap-3 contact-info">
            <div>
              <FaEnvelope className="me-2" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahmoud.rabie2512@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={darkMode ? "text-light" : "text-dark"}
              >
                mahmoud.rabie2512@gmail.com
              </a>
            </div>
            <div>
              <FaPhone className="me-2" />
              <a
                href="tel:+201557470384"
                className={darkMode ? "text-light" : "text-dark"}
              >
                +20 1557470384
              </a>
            </div>
            <div>
              <FaGithub className="me-2" />
              <a
                href="https://github.com/mahmou8999"
                target="_blank"
                rel="noreferrer"
                className={darkMode ? "text-light" : "text-dark"}
              >
                GitHub
              </a>
            </div>
            <div>
              <FaLinkedin className="me-2" />
              <a
                href="https://www.linkedin.com/in/mahmoud-rabie-788a45338/"
                target="_blank"
                rel="noreferrer"
                className={darkMode ? "text-light" : "text-dark"}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
