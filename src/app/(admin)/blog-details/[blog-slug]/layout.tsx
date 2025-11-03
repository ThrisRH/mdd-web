"use client";
import React from "react";
import {
  BodyWrapper,
  SidebarContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import BlogDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/BlogDetailSidebar";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <BodyWrapper>
      <SidebarContainer>
        <BlogDetailSidebar />
      </SidebarContainer>
      <MainContentContainer>{children}</MainContentContainer>
    </BodyWrapper>
  );
}
