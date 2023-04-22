import React from "react";
import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import myImg from "../../Assets/avatar4.webp";
import Tilt from "react-parallax-tilt";
// @ts-ignore
import SocialLinks from "../SocialLinks";

function Home2() {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <Tilt className="myAvatar content">
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
              <h1 className="content">FIND ME ON</h1>
              <p className="content">
                Feel free to <span className="purple">connect </span>with me
              </p>
              <h2 className="content">
                <span className="point" role="img" aria-labelledby="wave">
                  👇
                </span>
              </h2>
              <SocialLinks github linkedIn discord mail />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home2;
