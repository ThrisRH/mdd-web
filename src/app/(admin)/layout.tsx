"use client";
import BottomNavbar from "@/components/Layout/AdminLayout/BottomNavbar";
import Header from "@/components/Layout/AdminLayout/Header";
import { AdminLayoutContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import { BlogdetailcontextProvider } from "@/context/blogdetailcontext";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AdminLayoutContainer>
      <BlogdetailcontextProvider>
        <Header />
        {children}
        <BottomNavbar />
      </BlogdetailcontextProvider>
    </AdminLayoutContainer>
  );
}
