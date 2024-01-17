import React from "react";
import GitHubActivity from "react-github-calendar";
import { Row } from "react-bootstrap";
import { githubUsername } from "../data"; // Import the githubUsername variable

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar username={githubUsername} />
    </Row>
  );
}

export default Github;
