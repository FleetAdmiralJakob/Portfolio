import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ImPointRight} from "react-icons/im";
import {AiFillMail, AiFillPhone} from "react-icons/ai";

function ContactMe() {
  return (
      <Container
          fluid
          className="contact-section"
          id="about"
      >
        <Container>
            <Row>
                <Col md={12} className="about">
                    <h1 style={{ fontSize: "2.6em" }}>
                        CONTACT <span className="purple"> ME </span>
                    </h1>
                </Col>
            </Row>
            <p className="contact-body">
                <b> Jakob Rössner </b> <br /> <br />
                <AiFillPhone/> Phone: +49 1512 5404979 <br />
                <AiFillMail/> E-Mail:  <a href="mailto:jakob.roessner@outlook.de"> jakob.roessner@outlook.de </a>
            </p>
        </Container>
      </Container>
  );
}

export default ContactMe;