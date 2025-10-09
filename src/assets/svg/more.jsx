import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 0.96 0.96"
    enableBackground="new 0 0 32 32"
    id="Filled_Line"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      fill="none"
      id="XMLID_837_"
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.06}
      x1={7}
      x2={25}
      y1={16}
      y2={16}
      d="M0.21 0.48L0.75 0.48"
    />
    <path
      fill="none"
      id="XMLID_836_"
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.06}
      x1={7}
      x2={25}
      y1={25}
      y2={25}
      d="M0.21 0.75L0.75 0.75"
    />
    <path
      fill="none"
      id="XMLID_835_"
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.06}
      x1={7}
      x2={25}
      y1={7}
      y2={7}
      d="M0.21 0.21L0.75 0.21"
    />
  </svg>
);
export default SVGComponent;
