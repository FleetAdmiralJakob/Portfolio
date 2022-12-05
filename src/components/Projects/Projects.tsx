import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// @ts-ignore
import steampunk from "../../Assets/Projects/steampunk.png";
// @ts-ignore
import biggernumber from "../../Assets/Projects/biggernumber2.png";
// @ts-ignore
import tippy from "../../Assets/Projects/tippy2.png";
// @ts-ignore
import curseforge from "../../Assets/Projects/curseforge.png";
// @ts-ignore
import uncraftables from "../../Assets/Projects/uncraftables.png";
// @ts-ignore
import myt from "../../Assets/Projects/myt.png";
// @ts-ignore
import foods from "../../Assets/Projects/foods.png";
import loadable from "@loadable/component";
import {SiCurseforge} from "react-icons/si";
import {ImPointRight} from "react-icons/im";

const Particle = loadable(() => import("../Particle"));

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
              imgPath={steampunk}
              isBlog={false}
              labelsfirstclass={["Web"]}
              labelssecondclass={["Javascript", "CSS3", "HTML5"]}
              title="A Steampunk Game"
              description="A small game created by me with Javascript, CSS and HTML."
              ghLink="https://github.com/FleetAdmiralJakob/Steampunk-Game"
              demoLink="http://steampunk-game.me/Steampunk-Game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biggernumber}
              isBlog={false}
              labelsfirstclass={["Android", "Mobile"]}
              labelssecondclass={["Java", "Kotlin"]}
              title="Bigger Number Game"
              description="A simple Android app to demonstrate the use of Kotlin in Android app development. The user are presented 2 numbers on buttons- depending on if the larger number was clicked, the background color will change."
              ghLink="https://github.com/FleetAdmiralJakob/Bigger-Number-Game"
              downloadLink="https://github.com/FleetAdmiralJakob/Bigger-Number-Game/releases"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tippy}
              isBlog={false}
              labelsfirstclass={["Android", "Mobile"]}
              labelssecondclass={["Java", "Kotlin"]}
              title="Tippy"
              description="A tip calculator (for Android)!"
              ghLink="https://github.com/FleetAdmiralJakob/Tippy"
              downloadLink="https://github.com/FleetAdmiralJakob/Tippy/releases"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Other <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>Here are some other projects.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curseforge}
              isBlog={false}
              title="Minecraft mods by mine!"
              description="On the site curseforge.com you can find some of my first projects. 2 years ago I built some Minecraft Mods in Java! Sometimes I update them to maintain my skills."
            />
          </Col>
          <div className="projects-social">
            <h4>MY CURSEFORGE ACCOUNT</h4>
            <p>
              Here you can see my <span className="purple">Minecraft projects </span>...
            </p>
          </div>
          <h5>
              <span className="point" role="img" aria-labelledby="wave">
                👇
              </span>
          </h5>
          <li className="social-icons">
            <a
                href="https://www.curseforge.com/members/fleetadmiraljakob/projects"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
            >
              <SiCurseforge />
            </a>
          </li>
          <p className="text-project-curseforge">
            ... These are:<br/> <br/> <br/>
            <ImPointRight /> <a href="https://www.curseforge.com/minecraft/mc-mods/uncraftables-new"> Uncraftables [NEW]</a>: Over 30,000 downloads <br />
            <img src={uncraftables} alt="Uncraftables [New]" className="image-card-view"/> <br/> <br/>
            <ImPointRight /> <a href="https://www.curseforge.com/minecraft/mc-mods/myt"> Myt</a>: Over 350 downloads <br />
            <img src={myt} alt="Myt" className="image-card-view"/> <br/> <br/>
            <ImPointRight /> <a href="https://www.curseforge.com/minecraft/mc-mods/vanilla-foods-enhanced-new"> Foods Enhanced</a>: Over 500 downloads <br />
            <img src={foods} alt="Foods Enhanced" className="image-card-view"/> <br/> <br/>
          </p>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
