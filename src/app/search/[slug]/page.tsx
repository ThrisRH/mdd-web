"use client";
import PageContainer from "@/components/Main/PageContainer";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { H0 } from "@/components/Typography/Heading.styles";
import PostCard from "@/components/PostCard/PostCard";
import { BlogDetails } from "@/types/blog";
import NotFound from "@/components/Main/NotFound";
import PaginationBar from "@/components/Pagination/PaginationBar";
import Loading from "@/components/Main/Loading";

const page = () => {
  const params = useParams<{ slug: string }>();
  const title = decodeURIComponent(params.slug);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const [blog, setBlog] = useState<BlogDetails[]>([]);
  const [loading, setLoading] = useState(true);

  const handleGetCate = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:1337/api/blogs/by-title/${params.slug}?page=${pageNumber}&pageSize=3&populate=*`
      );
      const data = await response.json();
      console.log(data.data);

      if (!response.ok) {
        setLoading(false);
        return;
      }
      setBlog(data.data);
      setPageCount(data.meta.pagination.pageCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCate(page);
  }, [page]);

  if (loading) return <Loading />;
  if (blog.length != 0) {
    return (
      <PageContainer>
        <div className="flex-2 flex flex-col items-center gap-[50px]">
          <H0>Kết quả tiềm kiếm cho: {title}</H0>
          <div className="flex w-full  flex-col gap-[50px]">
            {blog.map((item) => (
              <PostCard post={item} key={item.documentId} />
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
  } else {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }
};

export default page;
