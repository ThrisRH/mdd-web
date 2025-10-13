"use client";
import React, { ReactNode } from "react";
import { Line } from "../PostCard/PostCard.styles";
import { Container, SectionBody } from "./SectionWrapper.styles";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";

interface Props {
  children: ReactNode;
  flexDirection?: string;
  gap?: number;
}

const SectionWrapper = ({ children, flexDirection, gap }: Props) => {
  return (
    <FlexContainer
      $flexDirection="column"
      $align="start"
      $gap={50}
      $width="100%"
    >
      <Line $width={90}></Line>
      <SectionBody $gap={gap} $flexDirection={flexDirection}>
        {children}
      </SectionBody>
    </FlexContainer>
  );
};

export default SectionWrapper;
