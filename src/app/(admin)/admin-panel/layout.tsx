"use client";
import AdminPanelSidebar from "@/section/admin/Sidebars/AdminPanelSidebar";
import { BodyWrapper } from "@/styles/layout";
import React from "react";

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
