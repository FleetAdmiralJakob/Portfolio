import React from "react";
import GitHubCalendar from "react-github-calendar";
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
        blockSize={10}
        blockMargin={4}
        colorScheme="default"
        theme={{
          background: '#ebebeb',
          text: '#b37be4',
          grade4: '#9667c1',
          grade3: '#7a549d',
          grade2: '#5e417a',
          grade1: '#000000',
        }}
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
