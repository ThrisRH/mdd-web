import * as React from "react";
const SVGComponent = (props) => (
  <svg
    className={props.className}
    fill={props.color || "#fff"}
    width="16px"
    height="16px"
    viewBox="0 -0.12 10.48 10.48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"down"}</title>
    <path d="m1.28 3.82 0.68 -0.68 3.28 3.26 3.28 -3.26 0.68 0.68 -3.96 3.92z" />
  </svg>
);
export default SVGComponent;
