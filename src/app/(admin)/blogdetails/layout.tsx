"use client";
import { BodyWrapper } from "@/components/Layout/AdminLayout/Layout.styles";
import React from "react";
import AdminPanelSidebar from "@/components/Layout/AdminLayout/Sidebars/AdminPanelSidebar";
import BlogDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/BlogDetailSidebar";
import { useInfo } from "@/context/InfoContext";
import { BlogDetailProvider } from "@/context/BlogDetailContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <BlogDetailProvider>
      <BodyWrapper>
        <BlogDetailSidebar />
        {children}
      </BodyWrapper>
    </BlogDetailProvider>
  );
}
