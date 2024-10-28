import React, { lazy } from "react";
import { Col, Row } from "react-bootstrap";

const SiMicrosoftoffice = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiMicrosoftoffice,
  })),
);

import React, { lazy, useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";

const SiMicrosoftoffice = lazy(() =>
  import("react-icons/si").then((module) => ({
    default: module.SiMicrosoftoffice,
  })),
);

function OtherSkills() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Col xs={4} md={2} className="tech-icons-office">
          <a href="https://www.office.com/" className="link-without-styling">
            <SiMicrosoftoffice />
            <div className="tech-description">MS Office</div>
          </a>
        </Col>
      )}
    </Row>
  );
}

export default OtherSkills;
