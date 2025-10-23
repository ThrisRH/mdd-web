"use client";

import Loading from "@/app/(user)/loading";
import UpdateBlog from "@/components/Main/AdminMain/Blogs/UpdateBlog";
import Comment from "@/components/Main/AdminMain/comment";
import NotFound from "@/components/Main/NotFound";
import { useBlogdetailcontext } from "@/context/blogdetailcontext/index";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { CommentProps } from "@/types/comment";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true); // mặc định true
  const params = useParams<{ "blog-slug": string }>();
  const slug = params["blog-slug"];
  const [comments, setComments] = useState<CommentProps[] | null>(null);
  const { value, setValue } = useBlogdetailcontext();

  useEffect(() => {
    const getComment = async () => {
      try {
        const blogRes = await fetch(`/mmdblogsapi/blogs/by-slug/${slug}`, {
          cache: "no-store",
        });
        const blogData = await blogRes.json();
        setValue?.(blogData?.data);

        const commentRes = await fetch(
          `/mmdblogsapi/comments?filters[blog][documentId][$eq]=${value?.documentId}&populate[reader][populate]=avatar`,
          {
            cache: "no-store",
          }
        );

        const commentData = await commentRes.json();
        setComments(commentData.data);
      } catch (error) {
        console.error(error);
        setValue?.(undefined);
      } finally {
        setLoading(false);
      }
    };

    getComment();
  }, [slug, setValue]);

  return (
    <MainContentContainer>
      {loading ? (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      ) : comments ? (
        <Comment comments={comments} />
      ) : (
        <FlexContainer $justify="center">
          <NotFound />
        </FlexContainer>
      )}
    </MainContentContainer>
  );
};

export default Page;
