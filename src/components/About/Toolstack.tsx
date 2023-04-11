import React, { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ConfidenceLevelBar from "./ConfidenceLevelBar";

const SiAndroidstudio = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiAndroidstudio,
  }))
);
const SiFigma = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiFigma }))
);
const SiJetbrains = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJetbrains }))
);
const SiLinux = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiLinux }))
);
const SiMacos = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiMacos }))
);
const SiUnity = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiUnity }))
);
const SiVercel = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiVercel }))
);
const SiVisualstudiocode = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiVisualstudiocode,
  }))
);
const SiWindows11 = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiWindows11 }))
);

function Toolstack() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons-vscode">
          <a
            href="https://code.visualstudio.com/"
            className="link-without-styling"
          >
            <SiVisualstudiocode />
            <div className="tech-description">
              VSCode
              <br />
              <ConfidenceLevelBar confidenceLevel={10} />
            </div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-highlight">
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
          <a
            href="https://developer.android.com/studio"
            className="link-without-styling"
          >
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
          <a
            href="https://www.microsoft.com/en-us/windows"
            className="link-without-styling"
          >
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
              <ConfidenceLevelBar confidenceLevel={5} />
            </div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a
            href="https://www.apple.com/macos/"
            className="link-without-styling"
          >
            <SiMacos />
            <div className="tech-description">
              MacOS
              <br />
              <ConfidenceLevelBar confidenceLevel={6} />
            </div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://vercel.com/" className="link-without-styling">
            <SiVercel viewBox="0 1.5 24 24" />
            <div className="tech-description">
              Vercel
              <br />
              <ConfidenceLevelBar confidenceLevel={10} />
            </div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://axiom.co/" className="link-without-styling">
            <svg
              height="1.3em"
              width="1.3em"
              viewBox="-4 -3 24 24"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.5089 10.1066L13.0911 4.31803C12.9344 4.05199 12.5482 3.83432 12.2329 3.83432H10.0991C9.60314 3.83432 9.39981 3.49237 9.64721 3.07442L10.8173 1.0978C10.9102 0.940926 10.91 0.747804 10.8168 0.5911C10.7236 0.434397 10.5516 0.337891 10.3655 0.337891H7.38875C7.07344 0.337891 6.68637 0.555072 6.52858 0.820524L0.744369 10.5524C0.586609 10.8178 0.586487 11.2522 0.744156 11.5177L2.23248 14.0243C2.48046 14.442 2.88713 14.4425 3.13616 14.0254L4.29915 12.0781C4.54819 11.661 4.95486 11.6615 5.20283 12.0792L6.25715 13.8548C6.41479 14.1203 6.80177 14.3376 7.11707 14.3376H13.9955C14.3109 14.3376 14.6978 14.1203 14.8555 13.8548L16.5072 11.0731C16.6649 10.8075 16.6656 10.3726 16.5089 10.1066ZM11.8932 9.828C12.1396 10.2465 11.9355 10.5889 11.4395 10.5889H6.08915C5.5932 10.5889 5.39029 10.2472 5.63826 9.82956L8.31555 5.32067C8.56352 4.90304 8.96929 4.90305 9.21723 5.3207L11.8932 9.828Z" />
            </svg>
            <div className="tech-description">
              Axiom
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
