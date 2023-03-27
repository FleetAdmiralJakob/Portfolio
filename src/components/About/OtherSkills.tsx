import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";
import ConfidenceLevelBar from "./ConfidenceLevelBar";

const SiAdobe = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiAdobe }))
);
const SiMicrosoftoffice = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiMicrosoftoffice,
  }))
);

function OtherSkills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons-office">
        <a href="https://www.office.com/" className="link-without-styling">
          <SiMicrosoftoffice />
          <div className="tech-description">
            MS Office
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons-adobe">
        <a href="https://www.adobe.com/" className="link-without-styling">
          <SiAdobe />
          <div className="tech-description">
            Adobe's Tools
            <br />
            <ConfidenceLevelBar confidenceLevel={4} />
          </div>
        </a>
      </Col>
    </Row>
  );
}

export default OtherSkills;
