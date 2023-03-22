import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// @ts-ignore
import logo from "../../Assets/logo.png";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {CgFileDocument, CgMail} from "react-icons/cg";
import {AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser,} from "react-icons/ai";
import {Picture} from "react-optimized-images";
import Logos from "./Logos";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const hackerObjects = document.querySelectorAll(
    "[id^='hacker-object']"
  ) as NodeListOf<HTMLElement>;

  const lettersSmall = "abcdefghijklmnopqrstuvwxyz";
  const lettersBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  hackerObjects.forEach((hackerObject) => {
    hackerObject.addEventListener("mouseover", () => {
      let iterations = 0;
      let interval: any = null;

      clearInterval(interval);

      interval = setInterval(() => {
        hackerObject.innerHTML = hackerObject.innerHTML
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              // @ts-ignore
              return hackerObject.dataset.value[index];
            }
            return lettersSmall[Math.floor(Math.random() * 26)];
          })
          .join("");

        // @ts-ignore
        if (iterations >= hackerObject.dataset.value.length)
          clearInterval(interval);

        iterations += 1 / 3;
      }, 30);
    });
  });

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Picture src={logo} className="logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            // @ts-ignore
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />
                <div id="hacker-object" data-value="Home">
                  Home
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />
                <div id="hacker-object2" data-value="About">
                  About
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                <div id="hacker-object3" data-value="Projects">
                  Projects
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} />
                <div id="hacker-object4" data-value="Resume">
                  Resume
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contactme"
                onClick={() => updateExpanded(false)}
              >
                <CgMail style={{ marginBottom: "2px" }} />
                <div id="hacker-object5" data-value="Contact Me">
                  Contact Me
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/FleetAdmiralJakob/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <Logos />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
