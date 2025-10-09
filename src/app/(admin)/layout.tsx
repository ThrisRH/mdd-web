"use client";
import Header from "@/components/Layout/AdminLayout/Header";
import { BodyWrapper } from "@/components/Layout/AdminLayout/Layout.styles";
import Sidebar from "@/components/Layout/AdminLayout/Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <BodyWrapper>
        <Sidebar />
        {children}
      </BodyWrapper>
    </>
  );
}
