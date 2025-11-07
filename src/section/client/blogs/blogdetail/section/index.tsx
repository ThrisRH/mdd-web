"use client";
import React, { ReactNode } from "react";
import { Line, SectionBody, SectionWrapper } from "./styled";

interface Props {
  children: ReactNode;
  flexDirection?: string;
  gap?: number;
}

const Section = ({ children, flexDirection }: Props) => {
  return (
    <SectionWrapper>
      <Line />
      <SectionBody $gap={24} $flexDirection={flexDirection}>
        {children}
      </SectionBody>
    </SectionWrapper>
  );
};

export default Section;
