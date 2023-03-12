import React from "react";
import {Col, Container, Row} from "react-bootstrap";
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
import {SiCurseforge} from "react-icons/si";
import {ImPointRight} from "react-icons/im";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              labelsfirstclass={["Web 🌐", "Game 🎮"]}
              labelssecondclass={["Javascript", "CSS3", "HTML5"]}
              title="A Steampunk Game"
              description="A small game created by me with Javascript, CSS and HTML."
              ghLink="FleetAdmiralJakob/Steampunk-Game"
              demoLink="http://steampunk-game.me/Steampunk-Game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biggernumber}
              isBlog={false}
              labelsfirstclass={["Mobile 📱", "Android", "Game 🎮"]}
              labelssecondclass={["Java ☕", "Kotlin"]}
              title="Bigger Number Game"
              description="A simple Android app to demonstrate the use of Kotlin in Android app development. The user are presented 2 numbers on buttons- depending on if the larger number was clicked, the background color will change."
              ghLink="FleetAdmiralJakob/Bigger-Number-Game"
              downloadLink="https://github.com/FleetAdmiralJakob/Bigger-Number-Game/releases"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tippy}
              isBlog={false}
              labelsfirstclass={["Mobile 📱", "Android"]}
              labelssecondclass={["Java ☕", "Kotlin"]}
              title="Tippy"
              description="A tip calculator (for Android)!"
              ghLink="FleetAdmiralJakob/Tippy"
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
              labelsfirstclass={["Modification(s)", "Game 🎮"]}
              labelssecondclass={["Java ☕"]}
            />
          </Col>
          </Row>
          <Row>
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
            <Col md={12}>
              <ImPointRight /> <a href="https://www.curseforge.com/minecraft/mc-mods/uncraftables-new"> Uncraftables [NEW]</a>: Over 30,000 downloads <br />
              <a href="https://www.curseforge.com/minecraft/mc-mods/uncraftables-new"><img src={uncraftables} alt="Uncraftables [New]" className="image-card-view"/></a> <br />
              <div className="mod-description">A lot of Vanilla Minecraft items are <span className="purple">uncraftable</span> and some of them can only be obtained via grinding or <span className="purple">luck or once</span>. I want to change this, but I'm a big fan of balancing, so these items are still relatively hard to obtain in my opinion, even with this mod. If not make it hard, we may just play in Creative mode, right?</div> <br/> <br/>
            </Col>
            <Col md={12}>
            <ImPointRight /> <a href="https://www.curseforge.com/minecraft/mc-mods/myt"> Myt</a>: Over 400 downloads <br />
            <a href="https://www.curseforge.com/minecraft/mc-mods/myt"><img src={myt} alt="Myt" className="image-card-view"/></a> <br />
            <div className="mod-description">A mod with nice additions that improve your Minecraft experience with <span className="purple">new ores, new flowers, new tools, new music, new world generation,</span> and other cool stuff.</div> <br/> <br/>
            </Col>
            <Col md={12}>
            <ImPointRight /> <a href="https://www.curseforge.com/minecraft/mc-mods/vanilla-foods-enhanced-new"> Foods Enhanced</a>: Over 1,000 downloads <br />
            <a href="https://www.curseforge.com/minecraft/mc-mods/vanilla-foods-enhanced-new"><img src={foods} alt="Foods Enhanced" className="image-card-view"/></a> <br />
            <div className="mod-description">This simple <span className="purple">Minecraft mod</span>, which requires the <span className="purple">Fabric modloader</span> relying on the <span className="purple">Fabric API</span>, focuses on enhancing the default <span className="purple">foods</span> of minecraft by adding new ones which should have been in the game!</div> <br/> <br/>
            </Col>
            </p>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
