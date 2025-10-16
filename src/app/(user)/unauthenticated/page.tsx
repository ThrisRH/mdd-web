"use client";
import { AuthBodyContainer } from "@/components/Auth/Auth.styles";
import NotFound from "@/components/Main/NotFound";
import React from "react";

// Trang báo chưa đăng nhập
const page = () => {
  return (
    <AuthBodyContainer>
      <NotFound title="Bạn chưa đăng nhập" />
    </AuthBodyContainer>
  );
};

export default page;
