import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {SiAndroidstudio, SiFigma, SiJetbrains, SiLinux, SiVercel, SiVisualstudiocode, SiWindows,} from "react-icons/si";

function Toolstack() {
  return (
      <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                  <SiLinux/>
                  <div className="tech-description">Linux</div>
              </Col>
              <Col xs={4} md={2} className="tech-icons-vscode">
                  <SiVisualstudiocode/>
                  <div className="tech-description">VSCode</div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                  <SiJetbrains/>
                  <div className="tech-description">Jetbrains IDEs and Tools</div>
              </Col>
              <Col xs={4} md={2} className="tech-icons-windows">
                  <SiWindows/>
                  <div className="tech-description">Windows</div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                  <SiAndroidstudio/>
                  <div className="tech-description">Android Studio</div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                  <SiFigma/>
                  <div className="tech-description">Figma</div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                  <SiVercel/>
                  <div className="tech-description">Vercel</div>
              </Col>
          </Row>
      </Container>
  );
}

export default Toolstack;
