import React from "react";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Spinner } from "react-bootstrap";
import { githubUsername } from "../data";

function Github() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {loading ? (
        <Spinner animation="border" />
      ) : (
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
      )}
    </Row>
  );
}

export default Github;
