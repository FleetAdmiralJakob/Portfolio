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

import React, { lazy, useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

// ... (rest of the imports)

function Techstack() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h2>
            (Programming) <span className="purple">Languages</span>
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* ... (rest of the component content) */}
          </Row>
        </>
      )}
    </Container>
  );
}

export default Techstack;
