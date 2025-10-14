"use client";

import Loading from "@/app/(user)/loading";
import {
  BodyWrapper,
  SidebarWrapper,
} from "@/components/Layout/AdminLayout/Layout.styles";
import AdminPanelSidebar from "@/components/Layout/Sidebars/AdminPanelSidebar";
import BlogDetailSidebar from "@/components/Layout/Sidebars/BlogDetailSidebar";
import UpdateBlog from "@/components/Main/AdminMain/Blogs/UpdateBlog";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";
import { BlogDetails } from "@/types/blog";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<BlogDetails | null>(null);
  const params = useParams<{ "blog-slug": string }>();
  const slug = params["blog-slug"];

  const getBlog = async () => {
    try {
      const res = await fetch(`/mmdblogsapi/blogs/by-slug/${slug}`, {
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
    getBlog();
  }, [slug]);
  return (
    <BodyWrapper>
      <SidebarWrapper>
        {data && <BlogDetailSidebar blog={data} />}
      </SidebarWrapper>
      {data ? (
        <UpdateBlog blog={data} />
      ) : (
        <FlexContainer
          $width="100%"
          $height="100%"
          $justify="center"
          $align="center"
        >
          <Loading />
        </FlexContainer>
      )}
    </BodyWrapper>
  );
};

export default page;
