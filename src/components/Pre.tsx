import React from "react";

interface Props {
  load: boolean;
}

function Pre(props: Props) {
  // This code loads a preloader when the page is loading
  // The preloader is defined in the .css file
  const { load } = props;
  const id = load ? "preloader" : "preloader-none";
  return <div id={id} />;
}

export default Pre;
