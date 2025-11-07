"use client";
import React from "react";
import { BodyWrapper, MainContentContainer } from "@/styles/layout";
import { SidebarContainer } from "@/section/admin/sidebars/styled";
import BlogDetailSidebar from "@/section/admin/sidebars/BlogDetailSidebar";

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
