import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const SiMicrosoftoffice = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiMicrosoftoffice,
  })),
);

function OtherSkills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons-office">
        <a href="https://www.office.com/" className="link-without-styling">
          <SiMicrosoftoffice />
          <div className="tech-description">MS Office</div>
        </a>
      </Col>
    </Row>
  );
}

export default OtherSkills;
