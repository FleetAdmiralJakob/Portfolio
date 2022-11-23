import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiAdobe, SiMicrosoftoffice } from "react-icons/si";

function OtherSkills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons-office">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons-adobe">
        <SiAdobe />
      </Col>
    </Row>
  );
}

export default OtherSkills;
