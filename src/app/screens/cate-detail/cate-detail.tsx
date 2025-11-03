"use client";

import Loading from "@/app/(user)/loading";
import {
  BodyWrapper,
  SidebarContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import CateDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/CateDetailSidebar";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import UpdateCate from "@/components/Main/AdminMain/Categories/UpdateCate";
import NotFound from "@/components/Main/NotFound";
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
