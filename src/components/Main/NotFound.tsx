"use client";
import React from "react";
import NotFoundIC from "@/assets/svg/notfound";
import { H1 } from "../Typography/Heading.styles";
import { Body2, Body3 } from "../Typography/Body.styles";

const NotFound = () => {
  return (
    <div className="flex flex-col flex-2 items-center center gap-8">
      <NotFoundIC />
      <H1>No results found</H1>
      <Body2 className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley{" "}
      </Body2>
    </div>
  );
};

export default NotFound;
