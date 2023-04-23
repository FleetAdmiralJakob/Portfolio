import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import myImg from "../../Assets/avatar4.webp";
import Tilt from "react-parallax-tilt";
import {DiscordPopup, SocialLinks} from "../SocialLinks";

function Home2() {
  const [showDiscordPopup, setShowDiscordPopup] = useState(false);

  return (
    <>
      <DiscordPopup showDiscordPopup={showDiscordPopup} setShowDiscordPopup={setShowDiscordPopup} />
      <Container fluid className="home-about-section content" id="about">
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
              <SocialLinks github linkedIn discord mail setShowDiscordPopup={setShowDiscordPopup} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home2;
