import React, { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SiAndroidstudio = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiAndroidstudio,
  })),
);
const SiFigma = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiFigma })),
);
const SiJetbrains = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJetbrains })),
);
const SiLinux = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiLinux })),
);
const SiMacos = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiMacos })),
);
const SiVercel = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiVercel })),
);
const SiVisualstudiocode = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiVisualstudiocode,
  })),
);
const SiWindows11 = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiWindows11 })),
);

import React, { lazy, useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const SiAndroidstudio = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiAndroidstudio,
  })),
);
// ... (rest of the imports)

function Toolstack() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons-vscode">
            <a
              href="https://code.visualstudio.com/"
              className="link-without-styling"
            >
              <SiVisualstudiocode />
              <div className="tech-description">VSCode</div>
            </a>
          </Col>
          {/* ... (rest of the component content) */}
        </Row>
      )}
    </Container>
  );
}

export default Toolstack;
