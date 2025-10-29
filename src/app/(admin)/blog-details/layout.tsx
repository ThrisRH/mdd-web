"use client";
import { BodyWrapper } from "@/components/Layout/AdminLayout/Layout.styles";
import React from "react";
import BlogDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/BlogDetailSidebar";
import { BlogdetailcontextProvider } from "@/context/blogdetailcontext/index";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <BodyWrapper>
      <BlogDetailSidebar />
      {children}
    </BodyWrapper>
  );
}
