import React from "react";
import GitHubCalendar from "react-github-calendar";
import {Row} from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="FleetAdmiralJakob"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
          // Use the 5 colors: export type ColorScale = [
          // 	level0: Color,
          // 	level1: Color,
          // 	level2: Color,
          // 	level3: Color,
          // 	level4: Color
          // ];
          // export type ThemeInput = {
          // 	light: ColorScale | [
          // 		from: Color,
          // 		to: Color
          // 	];
          // 	dark?: ColorScale | [
          // 		from: Color,
          // 		to: Color
          // 	];
        theme={
            {
                dark: [
                    "#ebebeb",
                    "#b37be4",
                    "#9667c1",
                    "#7a549d",
                    "#5e417a"
                ],
                }
        }
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
