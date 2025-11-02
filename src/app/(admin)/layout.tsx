"use client";
import Header from "@/components/Layout/AdminLayout/Header";
import { AdminLayoutContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AdminLayoutContainer>
      <Header />
      {children}
      {/* <BottomNavbar /> */}
    </AdminLayoutContainer>
  );
}
