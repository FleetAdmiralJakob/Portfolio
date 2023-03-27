import React, {lazy} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ConfidenceLevelBar from "./ConfidenceLevelBar";

const SiAndroidstudio = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiAndroidstudio })));
const SiFigma = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiFigma })));
const SiJetbrains = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiJetbrains })));
const SiLinux = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiLinux })));
const SiMacos = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiMacos })));
const SiUnity = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiUnity })));
const SiVercel = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiVercel })));
const SiVisualstudiocode = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiVisualstudiocode })));
const SiWindows11 = lazy(() => import('react-icons/si').then((module) => ({ default: module.SiWindows11 })));

function Toolstack() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons-vscode">
          <a href="https://code.visualstudio.com/" className="link-without-styling">
          <SiVisualstudiocode />
          <div className="tech-description">
            VSCode
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.jetbrains.com/" className="link-without-styling">
          <SiJetbrains />
          <div className="tech-description">
            Jetbrains's IDEs and Tools
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://developer.android.com/studio" className="link-without-styling">
          <SiAndroidstudio />
          <div className="tech-description">
            Android Studio
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://unity.com/" className="link-without-styling">
          <SiUnity />
          <div className="tech-description">
            Unity
            <br />
            <ConfidenceLevelBar confidenceLevel={7} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.figma.com/" className="link-without-styling">
          <SiFigma />
          <div className="tech-description">
            Figma
            <br />
            <ConfidenceLevelBar confidenceLevel={8} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-windows">
          <a href="https://www.microsoft.com/en-us/windows" className="link-without-styling">
          <SiWindows11 />
          <div className="tech-description">
            Windows
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.linux.org/" className="link-without-styling">
          <SiLinux />
          <div className="tech-description">
            Linux
            <br />
            <ConfidenceLevelBar confidenceLevel={6} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.apple.com/macos/" className="link-without-styling">
          <SiMacos />
          <div className="tech-description">
            MacOS
            <br />
            <ConfidenceLevelBar confidenceLevel={5} />
          </div>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://vercel.com/" className="link-without-styling">
          <SiVercel />
          <div className="tech-description">
            Vercel
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
            </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Toolstack;
