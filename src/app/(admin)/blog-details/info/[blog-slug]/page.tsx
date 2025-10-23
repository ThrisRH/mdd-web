"use client";

import Loading from "@/app/(user)/loading";
import UpdateBlog from "@/components/Main/AdminMain/Blogs/UpdateBlog";
import NotFound from "@/components/Main/NotFound";
import { useBlogdetailcontext } from "@/context/blogdetailcontext/index";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true); // mặc định true
  const params = useParams<{ "blog-slug": string }>();
  const slug = params["blog-slug"];
  const { value, setValue } = useBlogdetailcontext();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch(`/mmdblogsapi/blogs/by-slug/${slug}`, {
          cache: "no-store",
        });
        const data = await res.json();
        setValue?.(data?.data);
      } catch (error) {
        console.error(error);
        setValue?.(undefined);
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [slug, setValue]);

  return (
    <MainContentContainer>
      {loading ? (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      ) : value?.documentId ? (
        <UpdateBlog blog={value} />
      ) : (
        <FlexContainer $justify="center">
          <NotFound />
        </FlexContainer>
      )}
    </MainContentContainer>
  );
};

export default Page;
