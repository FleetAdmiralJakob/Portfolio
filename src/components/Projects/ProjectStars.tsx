import React, {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import {githubData} from "../data";

const ProjectStars = (props) => {
  const [stars, setStars] = useState("");

  githubData(props.url).then((data) => {
    const stars = data.stargazers_count;
    setStars(stars);
  });

  if (stars === null || stars === "") {
    return (
      <div>
        Check out <AiFillStar style={{ color: "yellow" }} /> on GitHub!
      </div>
    );
  }
  return (
    <div className="project-stars">
      {stars} <AiFillStar style={{ color: "yellow" }} />
    </div>
  );
};

export default ProjectStars;
