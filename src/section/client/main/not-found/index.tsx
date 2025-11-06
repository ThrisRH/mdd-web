"use client";
import React from "react";
import NotFoundIC from "@/assets/svg/not-found";
import { ContentContainer, NotFoundContent, Wrapper } from "./styled";

interface NotFoundProps {
  title?: string;
}

const NotFound = ({ title }: NotFoundProps) => {
  return (
    <Wrapper $align="center">
      <NotFoundIC className={"max-w-[510px] w-full max-h-[377px]"} />
      <ContentContainer $align="center">
        <h1>{title ? title : "No results found"}</h1>
        <NotFoundContent className="body-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`&apos;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley
        </NotFoundContent>
      </ContentContainer>
    </Wrapper>
  );
};

export default NotFound;
