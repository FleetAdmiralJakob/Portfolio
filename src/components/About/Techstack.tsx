import React, { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SiSupabase = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiSupabase })),
);

const SiIonic = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiIonic })),
);
const SiWebflow = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiWebflow })),
);
const SiAngular = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiAngular })),
);
const SiTrpc = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTrpc })),
);
const DiGit = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiGit })),
);
const DiGithubBadge = lazy(() =>
  import("react-icons/di").then((module) => ({
    default: module.DiGithubBadge,
  })),
);
const DiJava = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiJava })),
);
const DiReact = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiReact })),
);
const DiSass = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiSass })),
);
const SiCss3 = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiCss3 })),
);
const SiHtml5 = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiHtml5 })),
);
const SiJavascript = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJavascript })),
);
const SiJson = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJson })),
);
const SiMarkdown = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiMarkdown })),
);
const SiNextdotjs = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiNextdotjs })),
);
const SiPostcss = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiPostcss })),
);
const SiTailwindcss = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiTailwindcss,
  })),
);
const SiTypescript = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTypescript })),
);

function Techstack() {
  return (
    <Container>
      <h2>
        (Programming) <span className="purple">Languages</span>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons-html">
          <a
            href="https://www.w3schools.com/html/"
            className="link-without-styling"
          >
            <SiHtml5 />
            <div className="tech-description">HTML</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-css">
          <a
            href="https://www.w3schools.com/css/"
            className="link-without-styling"
          >
            <SiCss3 />
            <div className="tech-description">CSS</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-sass">
          <a href="https://sass-lang.com/" className="link-without-styling">
            <DiSass />
            <div className="tech-description">Sass</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-javascript">
          <a
            href="https://www.w3schools.com/js/"
            className="link-without-styling"
          >
            <SiJavascript />
            <div className="tech-description">JavaScript</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-typescript">
          <a
            href="https://www.typescriptlang.org/"
            className="link-without-styling"
          >
            <SiTypescript />
            <div className="tech-description">TypeScript</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.java.com/en/" className="link-without-styling">
            <DiJava />
            <div className="tech-description">Java</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a
            href="https://www.json.org/json-en.html"
            className="link-without-styling"
          >
            <SiJson />
            <div className="tech-description">JSON</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a
            href="https://www.markdownguide.org/"
            className="link-without-styling"
          >
            <SiMarkdown />
            <div className="tech-description">Markdown</div>
          </a>
        </Col>
      </Row>
      <h2>
        Other <span className="purple">Skills</span> (Frameworks etc.)
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons-react">
          <a href="https://reactjs.org/" className="link-without-styling">
            <DiReact />
            <div className="tech-description">ReactJS</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-highlight">
          <a href="https://nextjs.org/" className="link-without-styling">
            <SiNextdotjs />
            <div className="tech-description">Next.js</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-angular">
          <a href="https://angular.io/" className="link-without-styling">
            <SiAngular />
            <div className="tech-description">Angular</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://trpc.io/" className="link-without-styling">
            <SiTrpc />
            <div className="tech-description">tRPC</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://orm.drizzle.team/" className="link-without-styling">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 36 36"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="5" fill="#ffffff"></rect>
              <path
                d="M8.10752 16.6577C8.44369 16.0953 9.19471 15.8957 9.78497 16.2118C10.3752 16.5279 10.5812 17.24 10.245 17.8024L6.29891 24.404C5.96274 24.9664 5.21172 25.1661 4.62146 24.85C4.0312 24.5339 3.82522 23.8217 4.16139 23.2593L8.10752 16.6577Z"
                fill="#100c1a"
              ></path>
              <path
                d="M16.6132 11.596C16.9494 11.0336 17.7004 10.8339 18.2907 11.15C18.8809 11.4661 19.0869 12.1783 18.7507 12.7407L14.8046 19.3423C14.4684 19.9047 13.7174 20.1043 13.1272 19.7882C12.5369 19.4721 12.3309 18.76 12.6671 18.1976L16.6132 11.596Z"
                fill="#100c1a"
              ></path>
              <path
                d="M29.7011 11.5962C30.0373 11.0339 30.7883 10.8342 31.3785 11.1503C31.9688 11.4664 32.1748 12.1786 31.8386 12.7409L27.8925 19.3425C27.5563 19.9049 26.8053 20.1046 26.215 19.7885C25.6248 19.4724 25.4188 18.7602 25.755 18.1978L29.7011 11.5962Z"
                fill="#100c1a"
              ></path>
              <path
                d="M21.1932 16.6577C21.5294 16.0953 22.2804 15.8957 22.8706 16.2118C23.4609 16.5279 23.6669 17.24 23.3307 17.8024L19.3846 24.404C19.0484 24.9664 18.2974 25.1661 17.7071 24.85C17.1169 24.5339 16.9109 23.8217 17.2471 23.2593L21.1932 16.6577Z"
                fill="#100c1a"
              ></path>
            </svg>
            <div className="tech-description">Drizzle ORM</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-supabase">
          <a href="https://supabase.com/" className="link-without-styling">
            <SiSupabase />
            <div className="tech-description">Supabase</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://webflow.com/" className="link-without-styling">
            <SiWebflow />
            <div className="tech-description">Webflow</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-git">
          <a href="https://git-scm.com/" className="link-without-styling">
            <DiGit />
            <div className="tech-description">Git</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://github.com/" className="link-without-styling">
            <DiGithubBadge />
            <div className="tech-description">GitHub</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-postcss">
          <a href="https://postcss.org/" className="link-without-styling">
            <SiPostcss />
            <div className="tech-description">PostCSS</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-tailwind">
          <a href="https://tailwindcss.com/" className="link-without-styling">
            <SiTailwindcss />
            <div className="tech-description">Tailwind</div>
          </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons-ionic">
          <a
            href="https://ionicframework.com/"
            className="link-without-styling"
          >
            <SiIonic />
            <div className="tech-description">Ionic</div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
