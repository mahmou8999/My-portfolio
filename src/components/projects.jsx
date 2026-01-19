import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Carousel, Card } from "react-bootstrap";

function ProjectModal({ show, handleClose, project, darkMode }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header
        closeButton
        closeVariant={darkMode ? "white" : undefined}
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
  const [activeProject, setActiveProject] = useState(null);
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const positionRef = useRef(0);

  const projects = [
    {
      title: "Shop Easy",
      description:
        "A responsive website for a beautiful shop built with React & Bootstrap.",
      images: [
        "/sh",
        "/shop-easy-2.png",
        "/shop-easy-3.png",
        "/shop-easy-4.png",
        "/shop-easy-5.png",
        "/shop-easy-6.png",
        "/shop-easy-7.png",
        "/shop-easy-8.png",
        "/shop-easy-9.png",
        "/shop-easy-10.png",
        "/shop-easy-11.png"
      ],
      demo: "https://shopeasy112233.netlify.app/",
      github: "https://github.com/mahmou8999/ShopEasy",
    },
    {
      title: "Portfolio",
      description: "Personal portfolio",
      images: [
        "/portfolio-1.png",
        "/portfolio-2.png",
        "/portfolio-3.png",
        "/portfolio-4.png",
        "/portfolio-5.png",
        "/portfolio-6.png",
      ],
      demo: "https://live-demo-link.com",
      github: "https://github.com/mahmou8999/My-portfolio",
    },

    {
      title: "divinra",
      description: "divinra",
      images: [
        "/divinra-1.png",
        "/divinra-2.png",
        "/divinra-3.png",
        "/divinra-4.png",
        "/divinra-5.png",
        "/divinra-6.png",
        "/divinra-7.png",
        "/divinra-8.png",
        "/divinra-9.png"
      ],
      demo: "https://divin-ra-main.netlify.app/",
      github: "https://github.com/mahmou8999/Divin-ra",
    },
    {
      title: "Gradient-Background-Generator",
      description: "Gradient-Background-Generator",
      images: [
        "/gradient-background-generator-1.png",
        "/gradient-background-generator-2.png",
        "/gradient-background-generator-3.png",
      ],
      demo: "https://gradientbackgroundgenerator55.netlify.app/",
      github: "https://github.com/mahmou8999/Gradient-Background-Generator",
    },
  ];

  const loopProjects = [...projects, ...projects];

  useEffect(() => {
    const track = trackRef.current;
    let animation;

    const move = () => {
      if (!pausedRef.current) {
        positionRef.current -= 0.7;
        if (Math.abs(positionRef.current) >= track.scrollWidth / 2) {
          positionRef.current = 0;
        }
        track.style.transform = `translateX(${positionRef.current}px)`;
      }
      animation = requestAnimationFrame(move);
    };

    move();
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section
      id="projects"
      className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="container">
        <h2 className="mb-4 fw-bold text-center">My Projects</h2>

        <div style={{ overflow: "hidden" }}>
          <div
            ref={trackRef}
            style={{ display: "flex", width: "max-content" }}
          >
            {loopProjects.map((project, index) => (
              <div
                key={index}
                style={{
                  minWidth: "20%",
                  padding: "0 12px",
                }}
                onMouseEnter={() => (pausedRef.current = true)}
                onMouseLeave={() => (pausedRef.current = false)}
              >
                <Card
                  className={`h-100 shadow-sm ${
                    darkMode ? "card-dark" : "bg-white text-dark"
                  }`}
                >
                  <Card.Img
                    variant="top"
                    src={project.images[0]}
                    style={{ height: "160px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button
                      className={
                        darkMode ? "custom-btn-dark" : "custom-btn-light"
                      }
                      size="sm"
                      onClick={() => {
                        setActiveProject(project);
                        setShow(true);
                      }}
                    >
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        show={show}
        handleClose={() => setShow(false)}
        project={activeProject}
        darkMode={darkMode}
      />
    </section>
  );
}

export default Projects;
