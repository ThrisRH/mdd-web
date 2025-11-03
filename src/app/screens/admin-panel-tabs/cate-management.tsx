"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import CateTable from "@/components/Main/AdminMain/Categories/CateTable";
import NotFound from "@/components/Main/NotFound";
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
    if (categories) {
      setLoading(false);
    }
  }, [categories]);

  if (loading) {
    return (
      <MainContentContainer>
        <Loading />
      </MainContentContainer>
    );
  }

  if (!categories[0].documentId) {
    return (
      <MainContentContainer>
        <NotFound />
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
