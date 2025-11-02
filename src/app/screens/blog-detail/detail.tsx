"use client";
import Loading from "@/app/(user)/loading";
import UpdateBlog from "@/components/Main/AdminMain/Blogs/UpdateBlog";
import NotFound from "@/components/Main/NotFound";
import { useBlogdetailcontext } from "@/context/blogdetailcontext";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { BlogDetails } from "@/types/blog";
import React, { useEffect, useState } from "react";

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
      setLoading(false); // Đảm bảo sẽ mount khi đã có đủ dữ liệu
    }
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
