"use client";
import { useState, useEffect } from "react";
import PaginationBar from "./PaginationBar";
import PostCard from "@/components/PostCard/PostCard";
import { BlogDetails } from "@/types/blog";

interface Props {
  totalPages: number;
  page: number;
  slug?: string; // nếu có slug thì fetch search, không thì fetch home
}

export default function PaginationWrapper({ totalPages, page, slug }: Props) {
  const [currentPage, setCurrentPage] = useState(page);
  const [posts, setPosts] = useState<BlogDetails[]>([]);

  useEffect(() => {
    async function fetchPage() {
      let url = "";

      if (slug) {
        // search mode
        url = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs/by-title/${slug}?page=${currentPage}&pageSize=3&populate=*`;
      } else {
        // home mode
        url = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${currentPage}&pagination[pageSize]=3&populate=*&sort=createdAt:desc`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setPosts(data.data);
    }
    fetchPage();
  }, [currentPage, slug]);

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
