"use client";
import Header from "@/components/Layout/AdminLayout/Header";
import {
  AdminLayoutContainer,
  BodyWrapper,
} from "@/components/Layout/AdminLayout/Layout.styles";
import Sidebar from "@/components/Layout/AdminLayout/Sidebars/AdminPanelSidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AdminLayoutContainer>
      <Header />
      {children}
    </AdminLayoutContainer>
  );
}
