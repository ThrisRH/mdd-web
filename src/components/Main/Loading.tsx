import React from "react";
import { Dot, LoaderWrapper } from "./Loading.styles";

const Loading = () => {
  return (
    <LoaderWrapper>
      <Dot $delay="0s" />
      <Dot $delay="0.2s" />
      <Dot $delay="0.4s" />
    </LoaderWrapper>
  );
};

export default Loading;
