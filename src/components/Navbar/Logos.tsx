import React, {useEffect, useRef, useState} from "react";
import StandardLogo from "./StandardLogo";
import {AiFillStar} from "react-icons/ai";
import {githubData} from "../data";

const Logos = () => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const [stars, setStars] = useState("");
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => renderAnotherClass(), 3000);

    githubData("Portfolio").then(data => {
      const starCount = data.stargazers_count;
      setStars(starCount);
    });

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const renderAnotherClass = () => {
    requestAnimationFrame(() => {
      setCurrentLogo(prevLogo => (prevLogo + 1) % 3);
    });
  };

  const logos = [
    <StandardLogo />,
    <AiFillStar style={{ color: "yellow" }} className="star" />
  ];

  const logoIndex = currentLogo % logos.length;

  if (logoIndex === 1) {
    if (!stars) {
      return (
          <div>
            <div>Check out {logos[logoIndex]} on GitHub!</div>
          </div>
      );
    } else {
      return (
          <div>
            <div>
              {logos[logoIndex]} {stars}
            </div>
          </div>
      );
    }
  } else {
    return <div>{logos[logoIndex]}</div>;
  }
};

export default Logos;
