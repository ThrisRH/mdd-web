"use client";
import PageContainer from "@/components/Main/PageContainer";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { H0 } from "@/components/Typography/Heading.styles";
import PostCard from "@/components/PostCard/PostCard";
import { BlogDetails } from "@/types/blog";
import PaginationBar from "@/components/Pagination/PaginationBar";

interface Cate {
  id: number;
  documentId: string;
  tile: string;
}

const CatePage = () => {
  const params = useParams<{ slug: string }>();

  const [cate, setCate] = useState<Cate>();
  const [blogs, setBlogs] = useState<BlogDetails[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  // lấy thông tin cate
  const handleGetCate = async () => {
    try {
      const res = await fetch(`http://localhost:1337/api/cates/${params.slug}`);
      const data = await res.json();
      setCate(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // lấy blogs theo cate + phân trang
  const handleGetBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:1337/api/blogs?filters[cate][documentId][$eq]=${params.slug}&populate=cover&pagination[page]=${page}&pagination[pageSize]=3&sort=createdAt:desc`
      );
      const data = await res.json();
      setBlogs(data.data);
      setPageCount(data.meta.pagination.pageCount);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCate();
  }, []);

  useEffect(() => {
    handleGetBlogs();
  }, [page]);

  if (!cate) return null;

  return (
    <PageContainer>
      <div className="flex-2 flex flex-col items-center gap-[50px]">
        <H0>{cate.tile}</H0>

        <div className="flex w-full flex-col gap-[50px]">
          {blogs.map((post, index) => (
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
};

export default CatePage;
