"use client";

import Loading from "@/app/(user)/loading";
import {
  BodyWrapper,
  SidebarContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import CateDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/CateDetailSidebar";
import UpdateCate from "@/components/Main/AdminMain/Categories/UpdateCate";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<CateProps | null>(null);
  const params = useParams<{ "cate-slug": string }>();
  const slug = params["cate-slug"];

  const getCate = async () => {
    try {
      const res = await fetch(`/mmdblogsapi/cates/${slug}?populate=*`, {
        cache: "no-store",
      });
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  useEffect(() => {
    getCate();
  }, [slug]);
  return (
    <BodyWrapper>
      <SidebarContainer>
        {data && <CateDetailSidebar cate={data} />}
      </SidebarContainer>
      {data ? (
        <UpdateCate cate={data} />
      ) : (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      )}
    </BodyWrapper>
  );
};

export default page;
