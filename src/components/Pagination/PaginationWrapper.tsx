"use client";
import { useState, useEffect } from "react";
import PaginationBar from "./PaginationBar";
import PostCard from "@/components/PostCard/PostCard";
import { BlogDetails } from "@/types/blog";
import { BlogCardFrame } from "../Main/Styled/PageContainer.styles";
import { useRouter, useSearchParams } from "next/navigation";
import PageContainer from "../Main/PageContainer";
import NotFound from "../Main/NotFound";

interface BaseProps {
  totalPages: number;
  page: number;
}

interface WithSlug extends BaseProps {
  slug: string;
  type: "search" | "category";
}

interface WithoutSlug extends BaseProps {
  slug?: undefined;
  type?: undefined;
}

type Props = WithSlug | WithoutSlug;

export default function PaginationWrapper({
  totalPages,
  page,
  slug,
  type,
}: Props) {
  const [currentPage, setCurrentPage] = useState(page);
  const [posts, setPosts] = useState<BlogDetails[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchPage() {
      let url = "";

      if (slug && type === "category") {
        // cate mode
        url = `/mmdblogsapi/blogs?filters[cate][documentId][$eq]=${slug}&populate=cover&pagination[page]=${currentPage}&pagination[pageSize]=3&sort=createdAt:desc`;
      } else if (slug && type === "search") {
        // search mode
        url = `/mmdblogsapi/blogs/by-title/${slug}?page=${currentPage}&pageSize=3&populate=*`;
      } else {
        // home mode
        url = `/mmdblogsapi/blogs?pagination[page]=${currentPage}&pagination[pageSize]=3&populate=*&sort=createdAt:desc`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setPosts(data.data);
    }
    fetchPage();
  }, [currentPage, slug]);

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    router.push(`?page=${p}`);
  };

  return (
    <>
      {/* Danh sách bài viết */}
      <BlogCardFrame>
        {posts.map((post, index) => (
          <PostCard index={index} post={post} key={post.documentId} />
        ))}
      </BlogCardFrame>

      {/* Pagination */}
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
