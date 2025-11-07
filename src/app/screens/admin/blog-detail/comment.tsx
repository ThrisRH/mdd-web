"use client";
import Loading from "@/app/(user)/loading";
import Comment from "@/section/admin/comment";
import { useBlogdetailcontext } from "@/context/blogdetailcontext";
import { BlogDetails } from "@/types/blog";
import { CommentProps } from "@/types/comment";
import React, { useEffect, useState } from "react";
import { FlexContainer, MainContentContainer } from "@/styles/layout";

type Props = {
  comments: CommentProps[];
  blogDetail: BlogDetails;
};

const CommentScreen = ({ comments, blogDetail }: Props) => {
  const [loading, setLoading] = useState(true);
  const { setValue } = useBlogdetailcontext();

  useEffect(() => {
    // Set value khi blogDetail đã có dữ liệu
    if (comments && blogDetail) {
      setValue!(blogDetail);
    }
    setLoading(false); // Đảm bảo sẽ mount khi đã có đủ dữ liệu
  }, [comments, blogDetail, setValue]);

  if (loading) {
    return (
      <MainContentContainer>
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      </MainContentContainer>
    );
  }

  return (
    <MainContentContainer>
      <Comment comments={comments} />
    </MainContentContainer>
  );
};

export default CommentScreen;
