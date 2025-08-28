import NotFound from "@/components/Main/NotFound";
import PageContainer from "@/components/Main/PageContainer";
import React from "react";

// Trang báo chưa đăng nhập
const page = () => {
  return (
    <PageContainer>
      <NotFound title="Bạn chưa đăng nhập" />
    </PageContainer>
  );
};

export default page;
