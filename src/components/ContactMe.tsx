import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AiFillHome, AiFillMail, AiFillPhone} from "react-icons/ai";
import linkData from "./data";
import {DiscordPopup, SocialLinks} from "./SocialLinks";

function ContactMe() {
  return (
    <>
      <DiscordPopup />
      <section id="contact">
        <Container fluid className="contact-section content" id="about">
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
              <AiFillPhone /> <b>Phone:</b> +49 1512 5404979 <br />
              <AiFillMail /> <b>E-Mail:</b>{" "}
              <a href={linkData.mail}> jakob.roessner@outlook.de </a> <br />
              <AiFillHome /> <b>Address:</b> 15755, Teupitz ST Tornow, Germany{" "}
              <br />
            </p>
            <p>
              <h2>Get in touch with me on:</h2>
              <SocialLinks
                github
                linkedIn
                discord
              />
            </p>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default ContactMe;
