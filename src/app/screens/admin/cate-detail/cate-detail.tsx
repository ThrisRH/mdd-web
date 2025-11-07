"use client";

import Loading from "@/app/(user)/loading";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";
import UpdateCate from "@/section/admin/categories/cate-update-form";
import CateDetailSidebar from "@/section/admin/sidebars/CateDetailSidebar";
import { SidebarContainer } from "@/section/admin/sidebars/styled";
import NotFound from "@/section/client/main/not-found";
import { BodyWrapper } from "@/styles/layout";
import React, { useEffect, useState } from "react";

type CateDetailClientProps = {
  cateDetail: CateProps;
};

const CateDetailScreen = ({ cateDetail }: CateDetailClientProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [cateDetail]);

  if (loading) {
    return (
      <BodyWrapper>
        <Loading />
      </BodyWrapper>
    );
  }

  if (!cateDetail.documentId) {
    return (
      <BodyWrapper>
        <SidebarContainer>
          <CateDetailSidebar cate={null} />
        </SidebarContainer>

        <NotFound />
      </BodyWrapper>
    );
  }

  return (
    <BodyWrapper>
      <SidebarContainer>
        <CateDetailSidebar cate={cateDetail} />
      </SidebarContainer>

      <UpdateCate cate={cateDetail} />
    </BodyWrapper>
  );
};

export default CateDetailScreen;
