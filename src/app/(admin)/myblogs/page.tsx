"use client";
import Loading from "@/app/(user)/loading";
import {
  MainContentContainer,
  TitleContainer,
} from "@/components/Layout/AdminLayout/Layout.styles";
import BlogTable from "@/components/Main/AdminMain/Blogs/BlogTable";
import { H1 } from "@/components/Typography/Heading.styles";
import { useEffect, useState } from "react";

export default function MyBlogsPage() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const getBlogs = async (pageNumber: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=5&populate=*&sort=createdAt:desc`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        return null;
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs(1);
  }, []);

  if (loading) return <Loading />;

  return (
    <MainContentContainer>
      <TitleContainer>
        <H1>BÀI VIẾT CỦA KÊNH BLOG</H1>
      </TitleContainer>
      <BlogTable posts={data.data} />
    </MainContentContainer>
  );
}
