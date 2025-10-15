import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function Navbar({ darkMode, toggleTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        sidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".navbar-toggler")
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [sidebarOpen]);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    closeSidebar();
    setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } fixed-top`}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold" href="#home">
            Portfolio
          </a>

          {/* Links - Desktop */}
          <div className="d-lg-flex d-none mx-auto">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
            </ul>
          </div>

          {/* Theme button - Desktop */}
          <div className="d-lg-block d-none">
            <button
              className={`custom-btn ${
                darkMode ? "custom-btn-dark" : "custom-btn-light"
              }`}
              onClick={toggleTheme}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Sidebar toggle */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar ${sidebarOpen ? "open" : ""} ${
          darkMode ? "sidebar-dark" : "sidebar-light"
        }`}
      >
        <button
          className="btn-close ms-auto"
          style={{ fontSize: "1.5rem", filter: darkMode ? "invert(1)" : "none" }}
          onClick={closeSidebar}
        ></button>

        <ul className="nav flex-column mt-4 gap-2">
          <li className="nav-item">
            <a className="nav-link" href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
              About
            </a>
          </li>
        </ul>

        <button
          className={`custom-btn ${
            darkMode ? "custom-btn-dark" : "custom-btn-light"
          }`}
          onClick={() => {
            toggleTheme();
            closeSidebar();
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default Navbar;
