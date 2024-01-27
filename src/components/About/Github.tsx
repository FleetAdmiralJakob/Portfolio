import React from "react";
import GitHubCalendar from "react-github-calendar";
import {} from "react-bootstrap";
import { githubUsername } from "./data";

function Github() {
  return (
    <Row style={{}}>
      <h1 className="project-heading">Days I Code</h1>
      <GitHubCalendar
        // username={githubUsername}
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        theme_remove_placeholder={{
          dark: ["#ebebeb", "#b37be4", "#9667c1", "#7a549d", "#5e417a"],
          fontSize: 16,
        }}
      />
    </Row>
  );
}

export default Github;
