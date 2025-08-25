"use client";

import React, { useEffect, useState } from "react";
import { H0 } from "@/components/Typography/Heading.styles";
import PageContainer from "@/components/Main/PageContainer";
import PostCard from "@/components/PostCard/PostCard";
import PaginationBar from "@/components/Pagination/PaginationBar";
import { BlogDetails } from "@/types/blog";
import Loading from "@/components/Main/Loading";
import Splash from "@/components/Splash/Splash";

export default function Home() {
  const [posts, setPosts] = useState<BlogDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const handleGetPost = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:1337/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=3&populate=*&sort=createdAt:desc`
      );
      const data = await response.json();

      if (!response.ok) return;

      setPosts(data.data);
      setPageCount(data.meta.pagination.pageCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetPost(page);
  }, [page]);

  if (loading) return <Loading />;
  return (
    <PageContainer>
      <div className="flex-2 flex flex-col items-center gap-10 md:gap-[50px]">
        <H0>Blog</H0>

        {/* List posts */}
        <div className="flex w-full flex-col gap-[50px]">
          {posts.map((post, index) => (
            <PostCard index={index} post={post} key={post.documentId} />
          ))}
        </div>

        <PaginationBar
          currentPage={page}
          totalPages={pageCount}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </PageContainer>
  );
}
