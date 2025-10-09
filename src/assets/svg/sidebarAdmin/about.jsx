import * as React from "react";

const SVGComponent = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#233238"
      id="User--Streamline-Mynaui"
      height={24}
      width={24}
      {...props}
    >
      <path
        d="M5.625 4.6875a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 1 0 -3.75 0"
        strokeWidth={1.2}
      />
      <path
        d="M12.1875 12.8125c-0.296875 -5.833125 -9.078125 -5.833125 -9.375 0"
        strokeWidth={1.2}
      />
    </svg>
  );
};

export default SVGComponent;
