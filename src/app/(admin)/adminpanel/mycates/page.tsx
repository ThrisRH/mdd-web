"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import CateTable from "@/components/Main/AdminMain/Categories/CateTable";
import { H1 } from "@/components/Typography/Heading.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyCatesPage() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageNumber = Number(searchParams.get("page")) || 1;

  const getCates = async (pageNumber: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/cates?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate=*&sort=createdAt:desc`,
        { cache: "no-store" }
      );
      if (!res.ok) {
        return null;
      }
      const result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCates(pageNumber);
  }, [pageNumber]);

  if (loading)
    return (
      <FlexContainer $justify="center">
        <Loading />
      </FlexContainer>
    );

  return (
    <MainContentContainer>
      <TitleContainer>
        <H1>DANH SÁCH THƯ MỤC CỦA KÊNH BLOG</H1>
      </TitleContainer>
      <CateTable
        totalPages={data.meta.pagination.pageCount}
        currentPage={pageNumber}
        setPageNumber={(page) => router.push(`?page=${page}`)}
        categories={data.data}
      />
    </MainContentContainer>
  );
}
