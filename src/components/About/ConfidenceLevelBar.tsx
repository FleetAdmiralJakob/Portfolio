import React from "react";

interface Props {
  confidenceLevel: number
}

const ConfidenceLevelBar = (props: Props) => {
  return (
    <>
      <span className="confidence-level-text">Confidence Level</span>
      <div className="confidence-level-bar">
        {Array.from({ length: 10 }, (_, index) => {
          if (props.confidenceLevel > index) {
            return <div key={index} className="confidence-level-box-full" />;
          } else {
            return <div key={index} className="confidence-level-box" />;
          }
        })}
      </div>
    </>
  );
};

export default ConfidenceLevelBar;
