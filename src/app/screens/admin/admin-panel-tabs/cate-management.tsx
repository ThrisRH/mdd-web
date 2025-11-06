"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "./styled";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";
import CateTable from "@/section/admin/Categories/CateTable";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { Text } from "@/styles/theme/typography";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        <Text $variant="h1">DANH SÁCH THƯ MỤC CỦA KÊNH BLOG</Text>
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
