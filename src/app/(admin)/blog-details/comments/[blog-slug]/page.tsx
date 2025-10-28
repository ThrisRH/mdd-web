"use client";

import Loading from "@/app/(user)/loading";
import Comment from "@/components/Main/AdminMain/comment";
import NotFound from "@/components/Main/NotFound";
import { useBlogdetailcontext } from "@/context/blogdetailcontext";
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

  const getComment = async () => {
    try {
      const [blogRes, commentRes] = await Promise.all([
        fetch(`/mmdblogsapi/blogs/by-slug/${slug}`, { cache: "no-store" }),
        fetch(
          `/mmdblogsapi/comments?filters[blog][slug][$eq]=${slug}&populate[reader][populate]=avatar`,
          { cache: "no-store" }
        ),
      ]);

      const [blogData, commentData] = await Promise.all([
        blogRes.json(),
        commentRes.json(),
      ]);

      setValue?.(blogData.data);
      setComments(commentData.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getComment();
  }, [value?.documentId]);

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
