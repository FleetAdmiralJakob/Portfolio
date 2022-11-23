import React from "react";
import {Col, Row} from "react-bootstrap";
import {SiAdobe, SiMicrosoftoffice} from "react-icons/si";

function OtherSkills() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons-office">
                <SiMicrosoftoffice/>
                <div className="tech-description">MS Office</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons-adobe">
                <SiAdobe/>
                <div className="tech-description">Adobe's Tools</div>
            </Col>
        </Row>
    );
}

export default OtherSkills;
