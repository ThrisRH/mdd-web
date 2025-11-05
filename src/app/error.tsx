"use client"; // Error boundary luôn là client component

import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { Text } from "@/styles/theme/typography";
import React from "react";

export default function Error() {
  return (
    <FlexContainer>
      <Text $variant="h1">Lỗi máy chủ! Vui lòng thử lại sau...</Text>
    </FlexContainer>
  );
}
