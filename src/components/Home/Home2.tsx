import React from "react";
import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import myImg from "../../Assets/avatar4.webp";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn, FaMailBulk} from "react-icons/fa";
import linkData from "../linkData";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <Tilt className="myAvatar">
              <img
                src={myImg}
                className="img-fluid"
                alt="Avatar of Jakob Rössner"
                width="600"
                height="600"
              />
            </Tilt>
            <br />
            <br />
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <h2>
              <span className="point" role="img" aria-labelledby="wave">
                👇
              </span>
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={linkData.links[0].github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={linkData.links[0].linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={linkData.links[0].mail}
                  className="icon-colour  home-social-icons"
                  aria-label="Mail me"
                >
                  <FaMailBulk />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
