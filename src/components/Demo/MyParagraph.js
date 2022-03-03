import React from "react";

const MyParagraph = (props) => {
  console.log("MYPARAGRAPH IS RUNNING");
  return <p>{props.children}</p>;
};

export default MyParagraph;
