"use client";
import Header from "@/components/Layout/AdminLayout/Header";
import {
  AdminLayoutWrapper,
  BodyWrapper,
} from "@/components/Layout/AdminLayout/Layout.styles";
import Sidebar from "@/components/Layout/Sidebars/AdminPanelSidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AdminLayoutWrapper>
      <Header />
      {children}
    </AdminLayoutWrapper>
  );
}
