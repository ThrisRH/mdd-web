"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "./styled";
import BlogTable from "@/section/admin/Blogs/BlogTable";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
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
    setLoading(false);
  }, [blogs]);

  if (loading) {
    return (
      <MainContentContainer>
        <Loading />
      </MainContentContainer>
    );
  }

  return (
    <MainContentContainer>
      <TitleContainer>
        <h1>BÀI VIẾT CỦA KÊNH BLOG</h1>
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
