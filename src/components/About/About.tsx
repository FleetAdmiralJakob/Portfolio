import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import OtherSkills from "./OtherSkills";
import AboutCard from "./AboutCard";
// @ts-ignore
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { AiFillGithub } from "react-icons/ai";
import loadable from "@loadable/component";

const Particle = loadable(() => import("../Particle"));

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I am</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          <strong className="purple">Other</strong> Skills
        </h1>
        <OtherSkills />
        <Github />
        <h1>
          <strong className="purple">Stats</strong> From GitHub
        </h1>
        <br />
        <img
          src="https://github-readme-stats.vercel.app/api?username=fleetadmiraljakob&title_color=c770f0&icon_color=5d417a&text_color=ebebeb&bg_color=0a0e12&show_icons=true&count_private=true"
          alt="about"
          className="img-fluid"
        />{" "}
        <br />
        <br />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=fleetadmiraljakob&title_color=c770f0&icon_color=5d417a&text_color=ebebeb&bg_color=0a0e12&show_icons=true&count_private=true&langs_count=6"
          alt="about"
          className="img-fluid"
        />{" "}
        <br />
        <br />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=fleetadmiraljakob&theme=modern-lilac2"
          alt="about"
          className="img-fluid"
        />{" "}
        <br /> <br />
        <h4>
          See me <strong className="purple">on GitHub</strong>
        </h4>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/FleetAdmiralJakob"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
        </ul>
        <br />
        <br />
        <br />
        <h1>
          Other <strong className="purple">Stats</strong>
        </h1>
        <br />
        <img
            src="https://github-readme-stats.vercel.app/api/wakatime?username=FleetAdmiralJakob&title_color=c770f0&icon_color=5d417a&text_color=ebebeb&bg_color=0a0e12&layout=compact&hide=other&langs_count=20&all_time&custom_title=Wakatime%20Stats%20(Top%2020%20Langs)"
            alt="about"
            className="img-fluid"
        />{" "}
        <br />
        <br />
        <p>
            <strong className="purple">Note:</strong> Please note that by far not all of my activity is considered by Wakatime.
        </p>
      </Container>
    </Container>
  );
}

export default About;
