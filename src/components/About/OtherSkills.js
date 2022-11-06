import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAdobe, SiMicrosoftoffice } from "react-icons/si";

function OtherSkills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
      </Col>
    </Row>
  );
}

export default OtherSkills;
