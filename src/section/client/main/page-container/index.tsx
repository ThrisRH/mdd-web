"use client";
import React, { ReactNode } from "react";

import Sidebar from "@/section/client/sidebar";
import { Container, ContentWrapper } from "./styled";

interface PostProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PostProps) => {
  return (
    <ContentWrapper>
      <Container>
        {children}
        <Sidebar />
      </Container>
    </ContentWrapper>
  );
};

export default PageContainer;
