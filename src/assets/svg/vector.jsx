import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={8}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M6 0 0 4l6 4 22-4L6 0Z" />
  </svg>
);
export default SvgComponent;
