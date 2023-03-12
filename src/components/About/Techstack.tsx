import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  DiGit,
  DiGithubBadge,
  DiJava,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiWordpress,
} from "react-icons/di";
import {
  SiCsharp,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiKotlin,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiPostcss,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ConfidenceLevelBar from "./ConfidenceLevelBar";

function Techstack() {
  return (
    <Container>
      <h2>
        (Programming) <span className="purple">Languages</span>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons-html">
          <SiHtml5 />
          <div className="tech-description">
            HTML
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-css">
          <SiCss3 />
          <div className="tech-description">
            CSS
            <br />
            <ConfidenceLevelBar confidenceLevel={7} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-sass">
          <DiSass />
          <div className="tech-description">
            Sass
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-javascript">
          <SiJavascript />
          <div className="tech-description">
            JavaScript
            <br />
            <ConfidenceLevelBar confidenceLevel={7} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-typescript">
          <SiTypescript />
          <div className="tech-description">
            TypeScript
            <br />
            <ConfidenceLevelBar confidenceLevel={7} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <div className="tech-description">
            Java
            <br />
            <ConfidenceLevelBar confidenceLevel={3} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKotlin />
          <div className="tech-description">
            Kotlin
            <br />
            <ConfidenceLevelBar confidenceLevel={9} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-csharp">
          <SiCsharp />
          <div className="tech-description">
            C#
            <br />
            <ConfidenceLevelBar confidenceLevel={4} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJson />
          <div className="tech-description">
            JSON
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMarkdown />
          <div className="tech-description">
            Markdown
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
      </Row>
      <h2>
        Other <span className="purple">Skills</span> (Frameworks etc.)
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons-node">
          <DiNodejsSmall />
          <div className="tech-description">
            Node.js
            <br />
            <ConfidenceLevelBar confidenceLevel={3} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-react">
          <DiReact />
          <div className="tech-description">
            ReactJS
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <div className="tech-description">
            Next.js
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-mongo">
          <SiMongodb />
          <div className="tech-description">
            MongoDB
            <br />
            <ConfidenceLevelBar confidenceLevel={4} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-wordpress">
          <DiWordpress />
          <div className="tech-description">
            Wordpress
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-git">
          <DiGit />
          <div className="tech-description">
            Git
            <br />
            <span className="confidence-level-text">Confidence Level</span>
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGithubBadge />
          <div className="tech-description">
            GitHub
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-postcss">
          <SiPostcss />
          <div className="tech-description">
            PostCSS
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-tailwind">
          <SiTailwindcss />
          <div className="tech-description">
            Tailwind
            <br />
            <ConfidenceLevelBar confidenceLevel={10} />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons-material">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path>
          </svg>
          <div className="tech-description">
            Material UI
            <br />
            <ConfidenceLevelBar confidenceLevel={6} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
