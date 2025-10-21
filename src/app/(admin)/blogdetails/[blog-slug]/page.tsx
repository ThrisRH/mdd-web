"use client";

import Loading from "@/app/(user)/loading";
import UpdateBlog from "@/components/Main/AdminMain/Blogs/UpdateBlog";
import { useBlogDetail } from "@/context/BlogDetailContext";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { BlogDetails } from "@/types/blog";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<BlogDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const params = useParams<{ "blog-slug": string }>();
  const slug = params["blog-slug"];
  const { setBlogDetail } = useBlogDetail();

  const getBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/mmdblogsapi/blogs/by-slug/${slug}`, {
        cache: "no-store",
      });
      const data = await res.json();
      console.log("data: ", data);
      setData(data.data);
      setBlogDetail(data.data);
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBlog();
  }, [slug]);
  return (
    <MainContentContainer>
      {!loading && data ? (
        <UpdateBlog blog={data} />
      ) : (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      )}
    </MainContentContainer>
  );
};

export default page;
