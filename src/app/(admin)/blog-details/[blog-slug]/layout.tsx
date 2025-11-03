"use client";
import React from "react";
import {
  BodyWrapper,
  SidebarContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import BlogDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/BlogDetailSidebar";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { BlogdetailcontextProvider } from "@/context/blogdetailcontext";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <BlogdetailcontextProvider>
      <BodyWrapper>
        <SidebarContainer>
          <BlogDetailSidebar />
        </SidebarContainer>
        <MainContentContainer>{children}</MainContentContainer>
      </BodyWrapper>
    </BlogdetailcontextProvider>
  );
}
