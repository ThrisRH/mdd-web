"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import BlogTable from "@/components/Main/AdminMain/Blogs/BlogTable";
import NotFound from "@/components/Main/NotFound";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { Text } from "@/styles/theme/typography";
import { BlogDetails } from "@/types/blog";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  blogs: BlogDetails[];
  totalPages: number;
  pageNumber: number;
};

const BlogManagementScreen = ({ blogs, totalPages, pageNumber }: Props) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (blogs) {
      setLoading(false);
    }
  }, [blogs]);

  if (loading) {
    return (
      <MainContentContainer>
        <Loading />
      </MainContentContainer>
    );
  }

  if (!blogs[0].documentId) {
    return (
      <MainContentContainer>
        <NotFound />
      </MainContentContainer>
    );
  }

  return (
    <MainContentContainer>
      <TitleContainer>
        <Text $variant="h1">BÀI VIẾT CỦA KÊNH BLOG</Text>
      </TitleContainer>

      <BlogTable
        totalPages={totalPages}
        posts={blogs || []}
        currentPage={pageNumber}
        setPageNumber={(page) => router.push(`?page=${page}`)}
      />
    </MainContentContainer>
  );
};

export default BlogManagementScreen;
