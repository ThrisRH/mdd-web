"use client";
import { useState, useEffect } from "react";
import PaginationBar from "./PaginationBar";
import PostCard from "@/components/blogs/blogcard/blog-card";
import { BlogDetails } from "@/types/blog";
import { useRouter } from "next/navigation";
import { BlogCardFrame } from "@/components/Main/Styled/PageContainer.styles";
import NotFound from "@/components/Main/NotFound";
import { toast } from "react-toastify";

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

export default function PaginatedBlogList({
  totalPages,
  page,
  slug,
  type,
}: Props) {
  const [currentPage, setCurrentPage] = useState(page);
  const [posts, setPosts] = useState<BlogDetails[]>([]);
  const router = useRouter();

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
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data.data);
      } catch (error) {
        toast.error("Something went wrong. Please try again later.");
      }
    }
    fetchPage();
  }, [currentPage, slug]);

  const handlePageChange = (p: number) => {
    setCurrentPage(p);
    router.push(`?page=${p}`);
  };

  if (posts.length === 0 && type === "category") return <NotFound />;
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
