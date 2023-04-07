import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillHome,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import linkData from "./linkData";
// @ts-ignore
import popup_discord_png from "../Assets/discord-popup.png";
import Button from "react-bootstrap/Button";

function ContactMe() {
  /* State show discord popup */
  const [showDiscordPopup, setShowDiscordPopup] = React.useState(false);
  React.useEffect(() => {
    const contentElements = document.querySelectorAll(".content");

    // Add or remove the 'blur' class to each content element based on the 'showDiscordPopup' state
    contentElements.forEach((element) => {
      element.classList.toggle("blur", showDiscordPopup);
    });

    // Cleanup function to remove the 'blur' class from all content elements when the component unmounts
    return () => {
      contentElements.forEach((element) => {
        element.classList.remove("blur");
      });
    };
  }, [showDiscordPopup]);

  return (
    <>
      {showDiscordPopup && (
        <div className="discord-popup">
          <img
            src={popup_discord_png}
            alt="Discord Info"
            className="popup-discord-png"
          />
          <Button
            variant="primary"
            onClick={() => {
              setShowDiscordPopup(false);
            }}
          >
            Close
          </Button>
        </div>
      )}
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
              <ul className="contact-links">
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
              </ul>
            </p>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default ContactMe;
