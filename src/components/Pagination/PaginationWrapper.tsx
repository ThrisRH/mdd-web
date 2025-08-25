"use client";
import { useState, useEffect } from "react";
import PaginationBar from "./PaginationBar";
import PostCard from "@/components/PostCard/PostCard";
import { BlogDetails } from "@/types/blog";

interface Props {
  totalPages: number;
  page: number;
}

export default function PaginationWrapper({ totalPages, page }: Props) {
  const [currentPage, setCurrentPage] = useState(page);
  const [posts, setPosts] = useState<BlogDetails[]>([]);

  useEffect(() => {
    async function fetchPage() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${currentPage}&pagination[pageSize]=3&populate=*&sort=createdAt:desc`
      );
      const data = await res.json();
      setPosts(data.data);
    }
    fetchPage();
  }, [currentPage]);

  return (
    <>
      {/* Danh sách bài viết */}
      <div className="flex w-full flex-col gap-[50px]">
        {posts.map((post, index) => (
          <PostCard index={index} post={post} key={post.documentId} />
        ))}
      </div>

      {/* Pagination */}
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(p) => setCurrentPage(p)}
      />
    </>
  );
}
