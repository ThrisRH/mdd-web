"use client";
import { AuthBodyContainer } from "@/section/client/auth/styled";
import NotFound from "@/section/client/main/not-found";

export default function NotFoundPage() {
  return (
    <AuthBodyContainer>
      <NotFound title="Lỗi hệ thống" />;
    </AuthBodyContainer>
  );
}
