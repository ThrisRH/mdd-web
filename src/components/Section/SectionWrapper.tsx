"use client";
import React, { ReactNode } from "react";
import { Line } from "../PostCard/PostCard.styles";
import { Container, SectionBody } from "./SectionWrapper.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";

interface Props {
  children: ReactNode;
  flexDirection?: string;
  gap?: number;
}

const SectionWrapper = ({ children, flexDirection, gap }: Props) => {
  return (
    <FlexContainer $flexDirection="column" $gap="md">
      <Line $width={90}></Line>
      <SectionBody $gap={24} $flexDirection={flexDirection}>
        {children}
      </SectionBody>
    </FlexContainer>
  );
};

export default SectionWrapper;
