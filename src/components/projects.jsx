import React, { useState } from "react";
import { Modal, Button, Carousel, Card } from "react-bootstrap";

function ProjectModal({ show, handleClose, project, darkMode }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header
        closeButton
        className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
      >
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
      >
        <p>{project.description}</p>
        <Carousel className="mb-3">
          {project.images.map((img, i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={img} alt={`slide-${i}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        {project.video && (
          <div className="ratio ratio-16x9 mb-3">
            <video
              src={project.video}
              controls
              className="w-100 rounded"
            ></video>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer
        className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}
      >
        <Button
          className={darkMode ? "custom-btn-dark" : "custom-btn-light"}
          href={project.demo}
          target="_blank"
        >
          Live Demo
        </Button>
        <Button
          className={darkMode ? "custom-btn-dark" : "custom-btn-light"}
          href={project.github}
          target="_blank"
        >
          GitHub
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Projects({ darkMode }) {
  const [show, setShow] = useState(false);

  const project = {
    title: "stor",
    description:
      "A responsive website for a beautiful shop built with React & Bootstrap.",
    images: [
      "/home-stor.png",
      "/cart-stor.png",
      "/products-stor.png",
      "/singel-stor.png",
    ],
    video: "",
    demo: "https://live-demo-link.com",
    github: "https://github.com",
  };

  return (
    <section
      id="projects"
      className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="container">
        <h2 className="mb-4">My Projects</h2>
        <Card
          className={`h-100 shadow-sm ${
            darkMode ? "card-dark" : "bg-white text-dark"
          }`}
        >
          <Card.Img variant="top" src={project.images[0]} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button
              className={darkMode ? "custom-btn-dark" : "custom-btn-light"}
              size="sm"
              onClick={() => setShow(true)}
            >
              Details
            </Button>
          </Card.Body>
        </Card>
      </div>

      <ProjectModal
        show={show}
        handleClose={() => setShow(false)}
        project={project}
        darkMode={darkMode}
      />
    </section>
  );
}

export default Projects;
