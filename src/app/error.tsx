"use client"; // Error boundary luôn là client component

import { FlexContainer } from "@/styles/components/layout/Common.styles";
import React from "react";

export default function Error() {
  return (
    <FlexContainer>
      <h1>Lỗi máy chủ! Vui lòng thử lại sau...</h1>
    </FlexContainer>
  );
}
