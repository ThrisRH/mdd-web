"use client";
import React from "react";
import NotFoundIC from "@/assets/svg/notfound";
import { Text } from "@/styles/theme/typography";

interface NotFoundProps {
  title?: string;
}

const NotFound = ({ title }: NotFoundProps) => {
  return (
    <div className="flex flex-col w-full flex-2 items-center center gap-8">
      <NotFoundIC className={"max-w-[510px] w-full max-h-[377px]"} />
      <Text $variant="h1">{title ? title : "No results found"}</Text>
      <Text $variant="body2" className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry`&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley{" "}
      </Text>
    </div>
  );
};

export default NotFound;
