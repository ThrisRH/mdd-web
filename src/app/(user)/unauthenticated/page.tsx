"use client";
import { AuthBodyContainer } from "@/section/client/auth/styled";
import NotFound from "@/section/client/main/not-found";
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
