import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import linkData from "./linkData";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>
            Designed and Developed with{" "}
            <div className="text-red-500 px-2 text-2xl">&#10084;</div> by Jakob
            Rössner
          </h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} JR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={linkData.links[0].github}
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={linkData.links[0].linkedIn}
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={linkData.links[0].mail}
                className="footer-icon"
                aria-label="Mail Me"
              >
                <FaMailBulk />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="footer-body"></Col>
        <Col md="4" className="footer-body">
          <h3>Thank you for visiting my website!</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
