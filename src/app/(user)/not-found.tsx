"use client";
import { AuthBodyContainer } from "@/components/auth/styled";
import NotFound from "@/components/Main/NotFound";

export default function NotFoundPage() {
  return (
    <AuthBodyContainer>
      <NotFound title="Lỗi hệ thống" />;
    </AuthBodyContainer>
  );
}
