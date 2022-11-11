import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import homeLogo from "../../Assets/home-main.svg";
import loadable from "@loadable/component";

const Particle = loadable(() => import("../Particle"));
const Home2 = loadable(() => import("./Home2"));
const AboutSummary = loadable(() => import("./AboutSummary"));
const ProjectsSummary = loadable(() => import("./ProjectsSummary"));
const ContactMe = loadable(() => import("./ContactMe"));
const Type = loadable(() => import("./Type"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JAKOB RÖSSNER</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
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
