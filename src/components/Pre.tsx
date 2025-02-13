import React from "react";

interface Props {
  load: boolean;
}

function Pre(props: Props) {
  const { load } = props;
  const id = load ? "preloader" : "preloader-none";
  
  // Add aria-label for accessibility
  return <div id={id} role="progressbar" aria-label="Loading page content" />;
}

export default Pre;