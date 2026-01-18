import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

function Footer({ darkMode }) {
  return (
    <footer
      className={`footer py-4 text-center ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container">
        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://www.facebook.com/mahmoud.rabie.408984/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/201557470384"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/mahmoudrabie2512/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/mahmou8999"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0">
          © {new Date().getFullYear()} Mahmoud Rabie | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
