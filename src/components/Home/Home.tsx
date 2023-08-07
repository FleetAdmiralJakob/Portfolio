import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import AboutSummary from "./AboutSummary";
import ProjectsSummary from "./ProjectsSummary";
import ContactMe from "../ContactMe";
import Type from "./Type";

// The Home section of the website
function Home() {
  return (
    <section>
      <Container fluid className="home-section content" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="negative-letter-spacing">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi there!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋
                  </span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name">
                    {" "}
                    <span className="main-name-letter1">J</span>
                    <span className="main-name-letter2">A</span>
                    <span className="main-name-letter3">K</span>
                    <span className="main-name-letter4">O</span>
                    <span className="main-name-letter5">B</span>
                    <span className="main-name-letter6"> </span>
                    <span className="main-name-letter7">R</span>
                    <span className="main-name-letter8">Ö</span>
                    <span className="main-name-letter9">S</span>
                    <span className="main-name-letter10">S</span>
                    <span className="main-name-letter11">N</span>
                    <span className="main-name-letter12">E</span>
                    <span className="main-name-letter13">R</span>
                  </strong>
                  &nbsp;😉
                </h1>
              </div>

              <div style={{ padding: 50, textAlign: "left" }}>
                <span style={{ fontSize: 20 }}>
                  Software Engineering Intern for
                </span>
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-logo" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <AboutSummary />
      <ProjectsSummary />
      <ContactMe />
    </section>
  );
}

export default Home;
