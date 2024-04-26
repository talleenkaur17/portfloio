import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
             
              isBlog={false}
              title="Foodiez"
              description="Designed and implemented a responsive food ordering web application, integrating real-time data through the
              Swiggy API"
              ghLink="https://github.com/talleenkaur17/Foodiez"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="GLIMPSE AI"
              description="Engineered a movie recommendation system using GeminiPro-Latest AI Model byGoogle,offering dynamic
              suggestions for 20+diverse movies & shows,and enhanced user experience with a multilingual GPT search page
              for improved SEO.
              "
              ghLink="https://github.com/talleenkaur17/glimpse-ai"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="FintelliLearn"
              description=" Empowering financial literacy through tailored courses and interactive learning experiences."
                         
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
