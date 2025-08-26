"use client";
import PageContainer from "@/components/Main/PageContainer";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { H0 } from "@/components/Typography/Heading.styles";
import PostCard from "@/components/PostCard/PostCard";
import { BlogDetails } from "@/types/blog";
import PaginationBar from "@/components/Pagination/PaginationBar";
import {
  BlogCardFrame,
  BlogContainer,
} from "@/components/Main/Styled/PageContainer.styles";

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
      <BlogContainer>
        <H0>{cate.tile}</H0>

        <BlogCardFrame>
          {blogs.map((post, index) => (
            <PostCard index={index} post={post} key={post.documentId} />
          ))}
        </BlogCardFrame>

        <PaginationBar
          currentPage={page}
          totalPages={pageCount}
          onPageChange={(p) => setPage(p)}
        />
      </BlogContainer>
    </PageContainer>
  );
};

export default CatePage;
