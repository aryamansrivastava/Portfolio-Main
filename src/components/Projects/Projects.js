import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ChatStream from "../../Assets/Projects/main page.png";
import WeatherApp from "../../Assets/Projects/FoodFrenzy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatStream}
              isBlog={false}
              title="StudyNotion"
              description=" responsive and fully functional Ed-tech platform that enables 35+ users to seamlesslycreate, consume and rate educational content with proper authentication and authorization."
              
              ghLink="https://github.com/aryamansrivastava/Study-Notion-Project.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Food-Frenzy"
              description="Engineered a food ordering feature, seamlessly connects users with their favorite dishes through thelive Swiggy API."
              ghLink="https://github.com/aryamansrivastava/Food-Frenzy.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
