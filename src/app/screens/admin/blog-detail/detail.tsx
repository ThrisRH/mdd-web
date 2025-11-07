"use client";
import Loading from "@/app/(user)/loading";
import UpdateBlog from "@/section/admin/blogs/blog-update-form";
import NotFound from "@/section/client/main/not-found";
import { useBlogdetailcontext } from "@/context/blogdetailcontext";
import { BlogDetails } from "@/types/blog";
import React, { useEffect, useState } from "react";
import { FlexContainer, MainContentContainer } from "@/styles/layout";

type Props = {
  blogDetail: BlogDetails;
};

const BlogDetailScreen = ({ blogDetail }: Props) => {
  const [loading, setLoading] = useState(true);
  const { setValue } = useBlogdetailcontext();

  useEffect(() => {
    // Set value khi blogDetail đã có dữ liệu
    if (blogDetail) {
      setValue!(blogDetail);
    }
    setLoading(false); // Đảm bảo sẽ mount khi đã có đủ dữ liệu
  }, [blogDetail, setValue]);

  if (loading) {
    return (
      <MainContentContainer>
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      </MainContentContainer>
    );
  }

  if (!blogDetail?.documentId) {
    return (
      <MainContentContainer>
        <FlexContainer $justify="center">
          <NotFound />
        </FlexContainer>
      </MainContentContainer>
    );
  }
  return (
    <MainContentContainer>
      <UpdateBlog blog={blogDetail} />
    </MainContentContainer>
  );
};

export default BlogDetailScreen;
