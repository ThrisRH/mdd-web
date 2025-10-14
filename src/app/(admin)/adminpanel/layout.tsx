"use client";
import { BodyWrapper } from "@/components/Layout/AdminLayout/Layout.styles";
import React from "react";
import AdminPanelSidebar from "@/components/Layout/Sidebars/AdminPanelSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <BodyWrapper>
      <AdminPanelSidebar />
      {children}
    </BodyWrapper>
  );
}
