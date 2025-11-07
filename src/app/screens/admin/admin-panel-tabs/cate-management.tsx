"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "./styled";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";
import CateTable from "@/section/admin/categories/cate-table";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MainContentContainer } from "@/styles/layout";

type Props = {
  categories: CateProps[];
  totalPages: number;
  pageNumber: number;
};
const CategoryManagementScreen = ({
  categories,
  totalPages,
  pageNumber,
}: Props) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [categories]);

  if (loading) {
    return (
      <MainContentContainer>
        <Loading />
      </MainContentContainer>
    );
  }

  return (
    <MainContentContainer>
      <TitleContainer>
        <h1>DANH SÁCH THƯ MỤC CỦA KÊNH BLOG</h1>
      </TitleContainer>
      <CateTable
        totalPages={totalPages}
        currentPage={pageNumber}
        setPageNumber={(page) => router.push(`?page=${page}`)}
        categories={categories}
      />
    </MainContentContainer>
  );
};

export default CategoryManagementScreen;
