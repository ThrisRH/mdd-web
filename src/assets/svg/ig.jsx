import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 0.72 0.72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.09 0.33c0 -0.113 0 -0.17 0.035 -0.205S0.217 0.09 0.33 0.09h0.06c0.113 0 0.17 0 0.205 0.035S0.63 0.217 0.63 0.33v0.06c0 0.113 0 0.17 -0.035 0.205S0.503 0.63 0.39 0.63h-0.06c-0.113 0 -0.17 0 -0.205 -0.035S0.09 0.503 0.09 0.39z"
      stroke="#000"
      strokeWidth={0.06}
    />
    <path
      cx={16.5}
      cy={7.5}
      r={1.5}
      fill="#000"
      d="M0.54 0.225A0.045 0.045 0 0 1 0.495 0.27A0.045 0.045 0 0 1 0.45 0.225A0.045 0.045 0 0 1 0.54 0.225z"
    />
    <path
      cx={12}
      cy={12}
      r={3}
      stroke="#000"
      strokeWidth={0.06}
      d="M0.45 0.36A0.09 0.09 0 0 1 0.36 0.45A0.09 0.09 0 0 1 0.27 0.36A0.09 0.09 0 0 1 0.45 0.36z"
    />
  </svg>
);
export default SVGComponent;
