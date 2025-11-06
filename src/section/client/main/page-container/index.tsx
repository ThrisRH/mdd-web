"use client";
import React, { ReactNode } from "react";
import {
  Container,
  ContentWrapper,
} from "@/styles/components/layout/Layout.styles";
import Sidebar from "@/section/client/sidebar";

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
