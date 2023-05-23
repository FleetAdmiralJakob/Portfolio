import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { githubData, costumGithubRepoData } from "../data";

interface Props {
  url: string;
  costumUrl?: boolean;
}

const ProjectStars = (props: Props) => {
  const [stars, setStars] = useState("");

  if (!props.costumUrl) {
    githubData(props.url).then((data) => {
      const stars = data.stargazers_count;
      setStars(stars);
    });
  } else {
    costumGithubRepoData(props.url).then((data) => {
      const stars = data.stargazers_count;
      setStars(stars);
    });
  }

  if (stars === null || stars === "" || stars === undefined || !stars) {
    return (
      <div>
        Check out <AiFillStar style={{ color: "yellow" }} /> on GitHub!
      </div>
    );
  } else {
    return (
      <div className="project-stars">
        {stars} <AiFillStar style={{ color: "yellow" }} className="star" />
      </div>
    );
  }
};

export default ProjectStars;
