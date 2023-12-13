import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Library from "../..//Assets/Projects/Schema.png";
import Combo from "../../Assets/Projects/Combojumper logo.png";
import MUD from "../../Assets/Projects/MUD.png";
import Envirogram from "../../Assets/Projects/Envirogram.png";
import Estore from "../../Assets/Projects/Estore.png";
import STMMidiPlayer from "../../Assets/Projects/Midi.jpg";

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
              imgPath={Envirogram}
              isBlog={false}
              title="Envirogram"
              description="Environmental social media application that allows users to start fourm posts, upload multimedia content & view an evironmental news feed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={STMMidiPlayer}
              isBlog={false}
              title="MIDI Song Player"
              description="Embedded software solution for STM32 microcontroller in C to play saved MIDIsongs with intuitive hardware user input."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MUD}
              isBlog={false}
              title="Multiplayer Dungeon Crawler"
              description="Multiplayer 2d Java based dungeon crawler game. Allows players to explore random dungeons & player made dungeons with modular code for modded maps."        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library}
              isBlog={false}
              title="Library management system"
              description="Utilized PostgreSQL, Python, psycopg2 and leveraged REST API's to create a librarymanagement system API capable of serving dozens of libraries in a well organized schema."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Estore}
              isBlog={false}
              title="E-Store application"
              description="Employed Java, Angular & Rest API Tomcat server, developed a fullstack online e-storeapplication in a challenging team environment."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Combo}
              isBlog={false}
              title="Combo Jumper"
              description="Developed and designed 3d platformer solo indie game and published to steam. Currently at 100% positive feedback! .
              Learned strong time management skills and importance of a well documented process throughout development. 
              Developed C++ foundations and general project management skills throughout development."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
