import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// @ts-ignore
import logo from "../../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgFileDocument, CgMail } from "react-icons/cg";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { Picture } from "react-optimized-images";
import Logos from "./Logos";
import linkData from "../data";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const hackerObjects = document.querySelectorAll(
    "[id^='hacker-object']",
  ) as NodeListOf<HTMLElement>;

  const lettersSmall = "abcdefghijklmnopqrstuvwxyz";

  hackerObjects.forEach((hackerObject) => {
    let iterations = 0;
    let animationFrame: number | null = null;

    hackerObject.addEventListener("mouseover", () => {
      iterations = 0;
      cancelAnimationFrame(animationFrame!);

      const animate = () => {
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
        if (iterations >= hackerObject.dataset.value.length) return;

        iterations += 1 / 4;
        setTimeout(() => {
          animationFrame = requestAnimationFrame(animate);
        }, 40);
      };

      animationFrame = requestAnimationFrame(animate);
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
                to="/projects"
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
              <a href="https://hits.sh/www.roessner.tech/" className="no-after">
                <img
                  src={
                    "https://hits.sh/www.roessner.tech.svg?style=for-the-badge&label=Views&color=555555&labelColor=711ea6"
                  }
                  className="img-fluid hits"
                  alt="brand"
                />
              </a>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href={`${linkData.github}Portfolio`}
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
