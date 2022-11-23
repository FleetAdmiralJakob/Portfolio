import React from "react";
import {Col, Row} from "react-bootstrap";
import {DiGit, DiGithubBadge, DiJava, DiNodejsSmall, DiReact, DiWordpress,} from "react-icons/di";
import {SiCsharp, SiKotlin, SiMarkdown} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons-node">
                <DiNodejsSmall/>
            </Col>
            <Col xs={4} md={2} className="tech-icons-react">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons-wordpress">
                <DiWordpress/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKotlin/>
            </Col>
            <Col xs={4} md={2} className="tech-icons-csharp">
                <SiCsharp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons-git">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGithubBadge/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMarkdown/>
            </Col>
        </Row>
    );
}

export default Techstack;
