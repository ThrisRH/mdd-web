"use client";
import React, { ReactNode } from "react";
import { Line } from "../PostCard/PostCard.styles";
import { Container, SectionBody } from "./SectionWrapper.styles";

interface Props {
  children: ReactNode;
  flexDirection?: string;
  gap?: number;
}

const SectionWrapper = ({ children, flexDirection, gap }: Props) => {
  return (
    <Container>
      <Line $width={90}></Line>
      <SectionBody $gap={gap} $flexDirection={flexDirection}>
        {children}
      </SectionBody>
    </Container>
  );
};

export default SectionWrapper;
