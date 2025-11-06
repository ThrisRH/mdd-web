"use client";
import React from "react";
import NotFoundIC from "@/assets/svg/not-found";
import { Text } from "@/styles/theme/typography";
import { BodyWrapper } from "@/styles/layout";

interface NotFoundProps {
  title?: string;
}

const NotFound = ({ title }: NotFoundProps) => {
  return (
    <BodyWrapper>
      <NotFoundIC className={"max-w-[510px] w-full max-h-[377px]"} />
      <Text $variant="h1">{title ? title : "No results found"}</Text>
      <Text $variant="body2" $align="center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry`&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley
      </Text>
    </BodyWrapper>
  );
};

export default NotFound;
