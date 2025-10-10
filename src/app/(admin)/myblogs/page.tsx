"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/app/(user)/loading";
import {
  MainContentContainer,
  TitleContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import BlogTable from "@/components/Main/AdminMain/Blogs/BlogTable";
import { H1 } from "@/components/Typography/Heading.styles";

export default function MyBlogsPage() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageNumber = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=5&populate=*&sort=createdAt:desc`,
          { cache: "no-store" }
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, [pageNumber]);

  return (
    <MainContentContainer>
      <TitleContainer>
        <H1>BÀI VIẾT CỦA KÊNH BLOG</H1>
      </TitleContainer>

      {loading ? (
        <div style={{ opacity: 0.6 }}>
          <BlogTable
            posts={data?.data || []}
            currentPage={pageNumber}
            setPageNumber={(page) => router.push(`?page=${page}`)}
          />
        </div>
      ) : (
        <BlogTable
          posts={data?.data || []}
          currentPage={pageNumber}
          setPageNumber={(page) => router.push(`?page=${page}`)}
        />
      )}
    </MainContentContainer>
  );
}
