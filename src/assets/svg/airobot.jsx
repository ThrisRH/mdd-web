import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 0.45 0.45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.225 0.075a0.15 0.15 0 0 1 0.15 0.15v0.18a0.03 0.03 0 0 1 -0.03 0.03H0.105A0.03 0.03 0 0 1 0.075 0.405V0.225A0.15 0.15 0 0 1 0.225 0.075Zm0 0V0M0.12 0.345h0.21M0.015 0.24v0.12M0.435 0.24v0.12M0.165 0.285a0.03 0.03 0 1 1 0 -0.06 0.03 0.03 0 0 1 0 0.06Zm0.12 0a0.03 0.03 0 1 1 0 -0.06 0.03 0.03 0 0 1 0 0.06Z"
      stroke="#233238"
      strokeWidth={0.029999999999999995}
    />
  </svg>
);
export default SVGComponent;
