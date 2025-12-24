"use client";
import React from "react";
import { BodyWrapper, MainContentContainer } from "@/styles/layout";
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
