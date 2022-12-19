import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {DiGit, DiGithubBadge, DiJava, DiNodejsSmall, DiReact, DiSass, DiWordpress,} from "react-icons/di";
import {
    SiCsharp,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiJson,
    SiKotlin,
    SiMarkdown, SiNextdotjs,
    SiPostcss, SiTailwindcss,
    SiTypescript
} from "react-icons/si";

function Techstack() {
    return (
        <Container>
            <h2>(Programming) <span className="purple">Languages</span></h2>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-icons-html">
                    <SiHtml5/>
                    <div className="tech-description">HTML</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-css">
                    <SiCss3/>
                    <div className="tech-description">CSS</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-javascript">
                    <SiJavascript/>
                    <div className="tech-description">JavaScript</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-typescript">
                    <SiTypescript/>
                    <div className="tech-description">Typescript</div>
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
                <Col xs={4} md={2} className="tech-icons">
                    <SiJson/>
                    <div className="tech-description">JSON</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiMarkdown/>
                    <div className="tech-description">Markdown</div>
                </Col>
            </Row>
            <h2>Other <span className="purple">Skills</span> (Frameworks etc.)</h2>
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className="tech-icons-node">
                    <DiNodejsSmall/>
                    <div className="tech-description">Node.js</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-react">
                    <DiReact/>
                    <div className="tech-description">ReactJS</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiNextdotjs/>
                    <div className="tech-description">Next.js</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-wordpress">
                    <DiWordpress/>
                    <div className="tech-description">Wordpress</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-git">
                    <DiGit/>
                    <div className="tech-description">Git</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiGithubBadge/>
                    <div className="tech-description">GitHub</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-sass">
                    <DiSass/>
                    <div className="tech-description">Sass</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-postcss">
                    <SiPostcss/>
                    <div className="tech-description">PostCSS</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons-tailwind">
                    <SiTailwindcss/>
                    <div className="tech-description">Tailwind</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Techstack;
