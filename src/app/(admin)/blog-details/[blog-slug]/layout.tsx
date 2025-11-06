"use client";
import React from "react";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { BodyWrapper } from "@/styles/layout";
import { SidebarContainer } from "@/section/admin/Sidebars/styled";
import BlogDetailSidebar from "@/section/admin/Sidebars/BlogDetailSidebar";

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
