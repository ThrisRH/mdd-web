"use client";
import { AuthBodyContainer } from "@/components/Auth/Auth.styles";
import NotFound from "@/components/Main/NotFound";

export default function NotFoundPage() {
  return (
    <AuthBodyContainer>
      <NotFound title="Lỗi hệ thống" />;
    </AuthBodyContainer>
  );
}
