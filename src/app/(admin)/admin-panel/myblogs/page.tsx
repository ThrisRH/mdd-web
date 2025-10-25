"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import BlogTable from "@/components/Main/AdminMain/Blogs/BlogTable";
import Loading from "@/app/(user)/loading";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { Text } from "@/styles/theme/typography";

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
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate=*&sort=createdAt:desc`,
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
        <Text $variant="h1">BÀI VIẾT CỦA KÊNH BLOG</Text>
      </TitleContainer>

      {loading ? (
        <FlexContainer $justify="center">
          <Loading />
        </FlexContainer>
      ) : (
        <BlogTable
          totalPages={data.meta.pagination.pageCount}
          posts={data?.data || []}
          currentPage={pageNumber}
          setPageNumber={(page) => router.push(`?page=${page}`)}
        />
      )}
    </MainContentContainer>
  );
}
