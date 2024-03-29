import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard, { ProjectCardProps } from "./ProjectCards";
import steampunk from "../../Assets/Projects/steampunk.png";
import curseforge from "../../Assets/Projects/curseforge.png";
import uncraftables from "../../Assets/Projects/uncraftables.png";
import myt from "../../Assets/Projects/myt.png";
import flowershop from "../../Assets/Projects/flowershop.png";
import weatherio from "../../Assets/Projects/weatherio.png";
import foods from "../../Assets/Projects/foods.png";
import lylu from "../../Assets/Projects/lylu.png";
import { SiCurseforge } from "react-icons/si";
import { ImPointRight } from "react-icons/im";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const mayorProjects: ProjectCardProps[] = [
  {
    imgPath: steampunk,
    isBlog: false,
    labelsfirstclass: ["Web 🌐", "Game 🎮"],
    labelssecondclass: ["Javascript", "CSS", "HTML"],
    title: "A Steampunk Game",
    summary: "A small game created by me with Javascript, CSS and HTML.",
    description:
      "It's a small game where you must shoot as a seahorse as many enemies as you can.",
    ghLink: "Steampunk-Game",
    demoLink: "https://steampunk-game.vercel.app/",
  },
  {
    imgPath: weatherio,
    isBlog: false,
    labelsfirstclass: ["Web 🌐"],
    labelssecondclass: ["Next.js", "Typescript", "Tailwind", "tRPC"],
    title: "Weather.io",
    summary:
      "A PWA for the Weather! Created by me and the Creative Programmers team.",
    description:
      "You can see the weather of your location and search for other locations. You can also see the weather of the next 9 days and many other nerdy stuff (e.g. air quality).",
    ghLink: "https://github.com/The-Creative-Programming-Group/Weather-App",
    customGhLink: true,
    demoLink: "https://weatherio1.vercel.app",
  },
  {
    imgPath: flowershop,
    isBlog: false,
    labelsfirstclass: ["Web 🌐"],
    labelssecondclass: ["Webflow"],
    title: "The Flower Shop",
    summary: "A basic flower shop made with Webflow!",
    description:
      "Nice UI and the basic sides. All you need for a basic shop. The perfect site for small businesses!",
    demoLink: "https://the-flower-shop-3f91ab.webflow.io/",
  },
  {
    imgPath: lylu,
    isBlog: false,
    labelsfirstclass: ["Web 🌐", "Mobile 📱", "Android 🤖"],
    labelssecondclass: [
      "Ionic",
      "Typescript",
      "Cordova",
      "Angular",
      "AWS",
      "Kotlin",
    ],
    title: "The Lylu Tablet - Software Engineer",
    summary:
      "Worked as an intern at Lylu GmbH. And now I am working as a Software Engineer at there!",
    description: `Worked on the Frontend mainly with Ionic, Cordova, and Angular and on the Backend mainly with Typescript and Lambda Functions on AWS.
                   - I built the Notes app
                   - I updated the descriptions of the Lylu Games
                   - I built the Todo app
                   - I helped with some content creation stuff (blog articles)
                   - I built some data-scraping tools and analyzed the data from my tools, which helped a lot in understanding the users of Lylu
                   - I reviewed the code of an external contributor and added documentation to it
                   `,
    demoLink: "https://lylu.de/",
  },
];

function Projects() {
  const [readmore, setReadMore] = useState(false);

  const changeReadMore = () => {
    setReadMore(!readmore);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading negative-letter-spacing">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. <br />I am always on
          the lookout for challenging and exciting projects to work on.
        </p>
        <p style={{ color: "rgb(155 126 172)" }}>
          "Best way to learn is to build shit!"{" "}
        </p>
        <footer className="blockquote-footer">
          <a href="https://www.twitter.com/t3dotgg">TheoBr</a>
        </footer>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {mayorProjects.map((item) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={item.imgPath}
                  isBlog={item.isBlog}
                  labelsfirstclass={item.labelsfirstclass}
                  labelssecondclass={item.labelssecondclass}
                  title={item.title}
                  summary={item.summary}
                  description={item.description}
                  ghLink={item.ghLink}
                  customGhLink={item.customGhLink}
                  demoLink={item.demoLink}
                  workInProgress={item.workInProgress}
                  downloadLink={item.downloadLink}
                />
              </Col>
            );
          })}
        </Row>
        <h1 className="project-heading negative-letter-spacing">
          Other <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>Here you can find some other projects.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curseforge}
              isBlog={false}
              title="Minecraft mods by me!"
              description="On the site curseforge.com you can find some of my first projects. 3 years ago I built some Minecraft Mods in Java! Sometimes I update them to maintain my skills."
              labelsfirstclass={["Modification(s)", "Game 🎮"]}
              labelssecondclass={["Java ☕"]}
            />
          </Col>
        </Row>
        <Row>
          <h5>
            <div className="projects-social">
              <h4 className="negative-letter-spacing">MY CURSEFORGE ACCOUNT</h4>
              <p>
                Here you can see my{" "}
                <span className="purple">Minecraft projects </span>...
              </p>
            </div>
            <span className="point" role="img" aria-labelledby="wave">
              👇
            </span>
          </h5>
          <li className="social-icons">
            <a
              href="https://www.curseforge.com/members/fleetadmiraljakob/projects"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <SiCurseforge />
            </a>
          </li>
          <p className="text-project-curseforge">
            ... which are:
            <br /> <br /> <br />
            <Col
              md={12}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="3000"
            >
              <ImPointRight />{" "}
              <a href="https://www.curseforge.com/minecraft/mc-mods/uncraftables-new">
                {" "}
                Uncraftables [NEW]
              </a>
              : Over 35,000 downloads <br />
              <a href="https://www.curseforge.com/minecraft/mc-mods/uncraftables-new">
                <img
                  src={uncraftables}
                  alt="Uncraftables [New]"
                  className="image-card-view"
                />
              </a>{" "}
              <br />
              <div className="mod-description">
                <div>
                  A lot of Vanilla Minecraft items are{" "}
                  <span className="purple">uncraftable</span> and some of them
                  can only be obtained via grinding or{" "}
                  <span className="purple">luck or once</span>. I want to change
                  this, but I'm a big fan of balancing, so these items are still
                  relatively hard to obtain in my opinion, even with this mod.
                  If not make it hard, we may just play in Creative mode, right?
                </div>
                <span className="read-more" onClick={changeReadMore}>
                  Read more{" "}
                  {!readmore ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </span>
                {readmore && (
                  <div>
                    In case collecting wither skeleton skulls or fighting the
                    wither is too much work, there is a possibility to craft a
                    nether star, but this is designed as end game content, so
                    the ingredients are a bit extraordinary. You will need...{" "}
                    <em>checks notes</em> ah, yes, several things! Take a ghast
                    tear, put it into a phantom membrane, and then fill that
                    with dragon breath. This is the core of our star. Now add a
                    block of diamonds and a block of emeralds for shininess,
                    blue ice for transparency, a prismarine shard for form, a
                    netherite ingot for sturdiness, and a block of honey or
                    slime to keep it all together. Tadaa, new nether star! For
                    convenience's sake (and because I didn't want to add a new
                    item) you can complete both steps at once. For
                    inconvenience's sake, the crafting is not shapeless because
                    I want the dragon breath to be in the middle.
                  </div>
                )}
              </div>
              <br /> <br />
            </Col>
            <Col
              md={12}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="3000"
            >
              <ImPointRight />{" "}
              <a href="https://www.curseforge.com/minecraft/mc-mods/vanilla-foods-enhanced-new">
                {" "}
                Foods Enhanced
              </a>
              : Over 5,000 downloads <br />
              <a href="https://www.curseforge.com/minecraft/mc-mods/vanilla-foods-enhanced-new">
                <img
                  src={foods}
                  alt="Foods Enhanced"
                  className="image-card-view"
                />
              </a>{" "}
              <br />
              <div className="mod-description">
                This simple <span className="purple">Minecraft mod</span>, which
                requires the{" "}
                <a href="https://fabricmc.net/" className="purple a">
                  Fabric modloader
                </a>{" "}
                relying on the{" "}
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/fabric-api"
                  className="purple a"
                >
                  Fabric API
                </a>
                , focuses on enhancing the default{" "}
                <span className="purple">foods</span> of minecraft by adding new
                ones which should have been in the game!
              </div>{" "}
              <br /> <br />
            </Col>
            <Col
              md={12}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="3000"
            >
              <ImPointRight />{" "}
              <a href="https://www.curseforge.com/minecraft/mc-mods/myt">
                {" "}
                Myt
              </a>
              : Over 500 downloads <br />
              <a href="https://www.curseforge.com/minecraft/mc-mods/myt">
                <img src={myt} alt="Myt" className="image-card-view" />
              </a>{" "}
              <br />
              <div className="mod-description">
                A mod with nice additions that improve your Minecraft experience
                with{" "}
                <span className="purple">
                  new ores, new flowers, new tools, new music, new world
                  generation,
                </span>{" "}
                and other cool stuff.
              </div>{" "}
              <br /> <br />
            </Col>
          </p>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
