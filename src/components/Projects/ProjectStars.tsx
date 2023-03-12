import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const ProjectStars = (props) => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${props.url}`
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStars();
  }, [props.url]);

  if (stars === null) {
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
