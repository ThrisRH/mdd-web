"use client";

import {
  BodyWrapper,
  SidebarContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import CateDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/CateDetailSidebar";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import UpdateCate from "@/components/Main/AdminMain/Categories/UpdateCate";
import React from "react";

type CateDetailClientProps = {
  data: CateProps;
};

const CateDetailScreen = ({ data }: CateDetailClientProps) => {
  return (
    <BodyWrapper>
      {data ? (
        <SidebarContainer>
          <CateDetailSidebar cate={data} />
        </SidebarContainer>
      ) : null}

      <UpdateCate cate={data} />
    </BodyWrapper>
  );
};

export default CateDetailScreen;
