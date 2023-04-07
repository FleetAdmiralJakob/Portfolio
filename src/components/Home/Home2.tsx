import React from "react";
import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import myImg from "../../Assets/avatar4.webp";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import {FaDiscord, FaLinkedinIn, FaMailBulk} from "react-icons/fa";
import linkData from "../linkData";
// @ts-ignore
import popup_png from "../../Assets/discord-popup.png";
import Button from "react-bootstrap/Button";

function Home2() {

  /* State show discord popup */
  const [showDiscordPopup, setShowDiscordPopup] = React.useState(false);
  React.useEffect(() => {
    const contentElements = document.querySelectorAll('.content');

    // Add or remove the 'blur' class to each content element based on the 'showDiscordPopup' state
    contentElements.forEach(element => {
      element.classList.toggle('blur', showDiscordPopup);
    });

    // Cleanup function to remove the 'blur' class from all content elements when the component unmounts
    return () => {
      contentElements.forEach(element => {
        element.classList.remove('blur');
      });
    };
  }, [showDiscordPopup]);

  return (
      <>
      {showDiscordPopup && (
          <div className="discord-popup">
            <img src={popup_png} alt="Discord Info" style={{borderRadius: "5px"}}/>
            <Button variant="primary" onClick={() => {
              setShowDiscordPopup(false);
            }}>
              Close
            </Button>
          </div>
      )}
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
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={linkData.github}
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
                  href={linkData.linkedIn}
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
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="Discord"
                    onClick={(event) => {
                      event.preventDefault();
                      setShowDiscordPopup(true);
                    }}
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={linkData.mail}
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
      </>
  );
}

export default Home2;
