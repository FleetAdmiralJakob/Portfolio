import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// @ts-ignore
import logo from "../Assets/logo.png";
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

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  let interval: any = null;
  let interval2: any = null;
  let interval3: any = null;
  let interval4: any = null;
  let interval5: any = null;

  const hackerObject = document.querySelector("#hacker-object") as HTMLElement;
  const letterssmall = "abcdefghijklmnopqrstuvwxyz";
  const lettersbig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (hackerObject) {
    hackerObject.addEventListener("mouseover", () => {
      let iterations = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        hackerObject.innerHTML = hackerObject.innerHTML
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              // @ts-ignore
              return hackerObject.dataset.value[index];
            }
            return letterssmall[Math.floor(Math.random() * 26)];
          })
          .join("");

        // @ts-ignore
        if (iterations >= hackerObject.dataset.value.lenght)
          clearInterval(interval);

        iterations += 1 / 3;
      }, 30);
    });
  }

  const hackerObject2 = document.querySelector(
    "#hacker-object2"
  ) as HTMLElement;

  if (hackerObject2) {
    hackerObject2.addEventListener("mouseover", () => {
      let iterations2 = 0;

      clearInterval(interval2);

      interval2 = setInterval(() => {
        hackerObject2.innerHTML = hackerObject2.innerHTML
          .split("")
          .map((letter2, index2) => {
            if (index2 < iterations2) {
              // @ts-ignore
              return hackerObject2.dataset.value[index2];
            }
            return letterssmall[Math.floor(Math.random() * 26)];
          })
          .join("");

        // @ts-ignore
        if (iterations2 >= hackerObject2.dataset.value.lenght)
          clearInterval(interval2);

        iterations2 += 1 / 3;
      }, 30);
    });
  }

  const hackerObject3 = document.querySelector(
    "#hacker-object3"
  ) as HTMLElement;

  if (hackerObject3) {
    hackerObject3.addEventListener("mouseover", () => {
      let iterations3 = 0;

      clearInterval(interval3);

      interval3 = setInterval(() => {
        hackerObject3.innerHTML = hackerObject3.innerHTML
          .split("")
          .map((letter3, index3) => {
            if (index3 < iterations3) {
              // @ts-ignore
              return hackerObject3.dataset.value[index3];
            }
            return letterssmall[Math.floor(Math.random() * 26)];
          })
          .join("");

        // @ts-ignore
        if (iterations3 >= hackerObject3.dataset.value.lenght)
          clearInterval(interval3);

        iterations3 += 1 / 3;
      }, 30);
    });
  }

  const hackerObject4 = document.querySelector(
    "#hacker-object4"
  ) as HTMLElement;

  if (hackerObject4) {
    hackerObject4.addEventListener("mouseover", () => {
      let iterations4 = 0;

      clearInterval(interval4);

      interval4 = setInterval(() => {
        hackerObject4.innerHTML = hackerObject4.innerHTML
          .split("")
          .map((letter4, index4) => {
            if (index4 < iterations4) {
              // @ts-ignore
              return hackerObject4.dataset.value[index4];
            }
            return letterssmall[Math.floor(Math.random() * 26)];
          })
          .join("");

        // @ts-ignore
        if (iterations4 >= hackerObject4.dataset.value.lenght)
          clearInterval(interval4);

        iterations4 += 1 / 3;
      }, 30);
    });
  }

  const hackerObject5 = document.querySelector(
    "#hacker-object5"
  ) as HTMLElement;

  if (hackerObject5) {
    hackerObject5.addEventListener("mouseover", () => {
      let iterations5 = 0;

      clearInterval(interval5);

      interval5 = setInterval(() => {
        hackerObject5.innerHTML = hackerObject5.innerHTML
          .split("")
          .map((letter5, index5) => {
            if (index5 < iterations5) {
              // @ts-ignore
              return hackerObject5.dataset.value[index5];
            }
            return letterssmall[Math.floor(Math.random() * 26)];
          })
          .join("");

        // @ts-ignore
        if (iterations5 >= hackerObject5.dataset.value.lenght)
          clearInterval(interval5);

        iterations5 += 1 / 3;
      }, 30);
    });
  }

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
