import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";
import Particle from "../Particle";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";

function ContactMe() {
  return (
    <Container fluid className="contact-section" id="about">
      <Container>
        <Row>
          <Particle />
          <Col md={12} className="about">
            <h1 style={{ fontSize: "2.6em" }}>
              CONTACT <span className="purple"> ME </span>
            </h1>
          </Col>
        </Row>
        <p className="contact-body">
          <b> Jakob Rössner </b> <br /> <br />
          <AiFillPhone /> Phone: +49 1512 5404979 <br />
          <AiFillMail /> E-Mail:{" "}
          <a href="mailto:jakob.roessner@outlook.de">
            {" "}
            jakob.roessner@outlook.de{" "}
          </a>{" "}
          <br />
        </p>
        <p>
          <h3>Get in touch with me on:</h3>
          <ul className="contact-links">
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
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jakob-r%C3%B6ssner-532b93214/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </p>
      </Container>
    </Container>
  );
}

export default ContactMe;
