"use client";

import Loading from "@/app/(user)/loading";
import {
  BodyWrapper,
  SidebarContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import BlogDetailSidebar from "@/components/Layout/AdminLayout/Sidebars/BlogDetailSidebar";
import UpdateBlog from "@/components/Main/AdminMain/Blogs/UpdateBlog";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
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
      console.log("data: ", data);
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
      <SidebarContainer>
        {data && <BlogDetailSidebar blog={data} />}
      </SidebarContainer>
      {data ? (
        <UpdateBlog blog={data} />
      ) : (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      )}
    </BodyWrapper>
  );
};

export default page;
