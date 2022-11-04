import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import previewAbout from "../../Assets/previewAbout2.png";
import Tilt from "react-parallax-tilt";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function AboutSummary() {
  const [navColour] = useState(false);

  return (
    <Container fluid className="home-about-summary-section" id="about-summary">
      <Container>
        <Row>
          <Col md={8} className="home-about-summary-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MORE <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-summary-body">
              In this section I will give you a brief summary of{" "}
              <span className="purple"> my skills</span> and the{" "}
              <span className="purple"> tools</span> I'm familiar with.
            </p>
            <Nav.Link as={Link} to="/about" className="link">
              <AiOutlineUser style={{ marginBottom: "2px" }} /> Learn more about
              me
            </Nav.Link>
          </Col>
          <Col md={4} className="previewAbout">
            <Tilt>
              <img
                src={previewAbout}
                className="img-fluid"
                alt="previewAbout"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutSummary;
