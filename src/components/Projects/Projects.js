import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gamecart from "../../Assets/Projects/gamecart.jpg";
import anime from "../../Assets/Projects/animecom.jpg";
import diary from "../../Assets/Projects/diary.png";


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
              imgPath={gamecart}
              isBlog={false}
              title="Game-Cart"
              description="Full-stack responsive e-commerce website dedicated to the purchase of games, creating a seamless and immersive online shopping experience for users build with React js ,Tailwind Css,Node js ,Express js and Mongodb.
              "
              ghLink="https://github.com/Washeem2002/game-project"
              demoLink="https://game-project-inky.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="Anime.com"
              description="Full-stack responsive media-streaming website dedicated to for watching anime , creating a seamless and immersive anime-streaming experience for users build with React js ,Css,Node js ,Express js."
              ghLink="https://github.com/Washeem2002/anime.com"
              demoLink="https://anime-com.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diary}
              isBlog={false}
              title="Daily-Diary"
              description="Full-stack responsive personal blogging website dedicated to for writing daily diaries , creating a seamless and diary writing experience for users  build with EJS ,Css,Node js ,Express js,Mongodb ."
              ghLink="https://github.com/Washeem2002/daily-diary"
              demoLink="https://github.com/Washeem2002/daily-diary"              
            />
          </Col>

         

       

        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
