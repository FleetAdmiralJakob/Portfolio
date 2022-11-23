import React from "react";
import {Col, Row} from "react-bootstrap";
import {DiGit, DiGithubBadge, DiJava, DiNodejsSmall, DiReact, DiWordpress,} from "react-icons/di";
import {SiCsharp, SiKotlin, SiMarkdown} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons-node">
                <DiNodejsSmall/>
                <div className="tech-description">Node.js</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons-react">
                <DiReact/>
                <div className="tech-description">React.js</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons-wordpress">
                <DiWordpress/>
                <div className="tech-description">Wordpress</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
                <div className="tech-description">Java</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKotlin/>
                <div className="tech-description">Kotlin</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons-csharp">
                <SiCsharp/>
                <div className="tech-description">C#</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons-git">
                <DiGit/>
                <div className="tech-description">Git</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGithubBadge/>
                <div className="tech-description">GitHub</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMarkdown/>
                <div className="tech-description">Markdown</div>
            </Col>
        </Row>
    );
}

export default Techstack;
