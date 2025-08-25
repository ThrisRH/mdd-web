"use client";
import React, { ReactNode } from "react";
import { Line } from "../PostCard/PostCard.styles";

interface Props {
  children: ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return (
    <div className="flex w-full items-start flex-col gap-[50px]">
      <Line $width={90}></Line>
      {children}
    </div>
  );
};

export default SectionWrapper;
