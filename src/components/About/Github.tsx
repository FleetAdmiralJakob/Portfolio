import React from "react";
import GitHubActivity from "react-github-calendar";
import { Row } from "react-bootstrap";
import { githubUsername } from "../data";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username={githubUsername}
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        theme={{
          dark: ["#ebebeb", "#b37be4", "#9667c1", "#7a549d", "#5e417a"],
        }}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
