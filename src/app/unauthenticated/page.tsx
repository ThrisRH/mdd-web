"use client";
import { EmptyWrapper } from "@/components/Auth/Auth.styles";
import NotFound from "@/components/Main/NotFound";
import React from "react";

// Trang báo chưa đăng nhập
const page = () => {
  return (
    <EmptyWrapper>
      <NotFound title="Bạn chưa đăng nhập" />
    </EmptyWrapper>
  );
};

export default page;
