import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import previewProjects from "../../Assets/previewProjects.webp";
import Tilt from "react-parallax-tilt";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImPointRight } from "react-icons/im";
import { Picture } from "react-optimized-images";

function AboutSummary() {
  return (
    <Container
      fluid
      className="home-projects-summary-section content"
      id="projects-summary"
      data-aos="fade-left"
      data-aos-offset="150"
      data-aos-duration="1200"
    >
      <Container>
        <Row>
          <Col md={7} className="home-projects-summary-description">
            <h1
              style={{ fontSize: "2.6em" }}
              className="negative-letter-spacing"
            >
              MY <span className="purple"> PROJECTS </span>
            </h1>
            <p className="home-about-summary-body">
              Here you can find some of my{" "}
              <span className="purple"> recent projects </span> included my
              first contact with programming. I'm always looking for{" "}
              <span className="purple"> new challenges </span> and new projects
              to work on. <br />
              <br />
              Some of them are: <br /> <br />
              <ul>
                <li className="basic-list">
                  <ImPointRight /> A tablet for elderly people
                </li>{" "}
                <br />
                <li className="basic-list">
                  <ImPointRight /> A weather app
                </li>{" "}
                <br />
                <li className="basic-list">
                  <ImPointRight /> A few Minecraft Mods
                </li>{" "}
                <br /> <br />
              </ul>
              In the case of the Minecraft Mods, they were my{" "}
              <span className="purple"> first projects</span> in relationship to
              programming after some small stuff I tried out with Scratch.
            </p>
            <Nav.Link as={Link} to="/projects" className="link">
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: "2px", marginRight: "7px" }}
              />
              See my projects
            </Nav.Link>
          </Col>
          <Col md={5} className="previewProjects">
            <Tilt>
              <Picture
                src={previewProjects}
                className="img-fluid"
                alt="previewProjects"
                style={{ borderRadius: "20px" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutSummary;
