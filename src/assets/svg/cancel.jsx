import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 0.3 0.3"
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m0.03 0.03 0.24 0.24m-0.24 0 0.24 -0.24"
      stroke="#fff"
      strokeWidth={0.05}
    />
  </svg>
);
export default SVGComponent;
