import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiFigma,
  SiJetbrains,
  SiLinux,
  SiMacos,
  SiUnity,
  SiVercel,
  SiVisualstudiocode,
  SiWindows11,
} from "react-icons/si";
import ConfidenceLevelBar from "./ConfidenceLevelBar";

function Toolstack() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons-vscode">
          <SiVisualstudiocode />
          <div className="tech-description">
            VSCode
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJetbrains />
          <div className="tech-description">
            Jetbrains's IDEs and Tools
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio />
          <div className="tech-description">
            Android Studio
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiUnity />
          <div className="tech-description">
            Unity
            <br />
            <ConfidenceLevelBar confidenceLevel={7} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFigma />
          <div className="tech-description">
            Figma
            <br />
            <ConfidenceLevelBar confidenceLevel={8} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-windows">
          <SiWindows11 />
          <div className="tech-description">
            Windows
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
          <div className="tech-description">
            Linux
            <br />
            <ConfidenceLevelBar confidenceLevel={6} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos />
          <div className="tech-description">
            MacOS
            <br />
            <ConfidenceLevelBar confidenceLevel={5} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
          <div className="tech-description">
            Vercel
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Toolstack;
