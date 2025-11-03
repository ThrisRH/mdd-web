"use client";
import BottomNavbar from "@/components/Layout/AdminLayout/BottomNavbar";
import Header from "@/components/Layout/AdminLayout/Header";
import { AdminLayoutContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import React from "react";
import { BlogdetailcontextProvider } from "@/context/blogdetailcontext";

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
