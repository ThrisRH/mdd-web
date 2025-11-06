"use client";
import BottomNavbar from "@/component/layout/admin/bottom-navbar";
import Header from "@/component/layout/admin/header/admin-header";
import React from "react";
import { BlogdetailcontextProvider } from "@/context/blogdetailcontext";
import { AdminLayoutContainer } from "@/styles/layout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <BlogdetailcontextProvider>
      <AdminLayoutContainer>
        <Header />
        {children}
        <BottomNavbar />
      </AdminLayoutContainer>
    </BlogdetailcontextProvider>
  );
}
