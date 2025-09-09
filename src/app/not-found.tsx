"use client";
import { EmptyWrapper } from "@/components/Auth/Auth.styles";
import NotFound from "@/components/Main/NotFound";

export default function NotFoundPage() {
  return (
    <EmptyWrapper>
      <NotFound title="Lỗi hệ thống" />;
    </EmptyWrapper>
  );
}
