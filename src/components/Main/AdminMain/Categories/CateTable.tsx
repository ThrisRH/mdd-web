"use client";
import React, { ReactNode, useEffect } from "react";
import {
  TableWrapper,
  TableBodyCell,
  TableHeaderCell,
  RowContainer,
  IconContainer,
} from "../styles/Page.styles";
import { Body5, Body3, Body2 } from "@/components/Typography/Body.styles";
import NoneSelectionIC from "@/assets/svg/Interact/NoneSelectionSquare";
import SelectedIC from "@/assets/svg/Interact/SelectedSquare";

import {
  PaginationButton,
  PaginationControls,
  PaginationWrapper,
} from "@/components/Layout/AdminLayout/Layout.styles";
import { PageNumber } from "@/components/Pagination/PaginationBar.styles";
import { CateProps } from "@/components/Layout/DesktopNav";
import { useRouter, useSearchParams } from "next/navigation";

type TableItem = {
  title?: string;
  icon?: ReactNode;
  selectedIcon?: ReactNode;
};

const TableList: TableItem[] = [
  { icon: <NoneSelectionIC />, selectedIcon: <SelectedIC /> },
  { title: "Danh mục" },
  { title: "Ngày tạo" },
  { title: "Tên rút gọn" },
  { title: "Số lượng bài viết" },
];

interface CateTableProps {
  categories: CateProps[];
  currentPage: number;
  totalPages: number;
  setPageNumber: (page: number) => void;
}

const formatDate = (postDate: string) => {
  const date = new Date(postDate);
  const formatted = date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formatted;
};

const CateTable = ({
  categories,
  totalPages,
  currentPage,
  setPageNumber,
}: CateTableProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const pageParam = searchParams.get("page");
    const pageNum = pageParam ? parseInt(pageParam, 10) : 1;

    if (!isNaN(pageNum) && pageNum !== currentPage) {
      setPageNumber(pageNum);
    }
  }, [searchParams, currentPage, setPageNumber]);

  const handleChangePage = (page: number) => {
    router.push(`?page=${page}`);
    setPageNumber(page);
  };
  return (
    <TableWrapper>
      <thead>
        <tr>
          {TableList.map((item, index) => (
            <TableHeaderCell key={index}>
              {item.title ? (
                <Body3 $fontWeight="500" $size={16}>
                  {item.title}
                </Body3>
              ) : (
                <IconContainer>{item.icon}</IconContainer>
              )}
            </TableHeaderCell>
          ))}
        </tr>
      </thead>

      <tbody>
        {categories.map((item) => (
          <RowContainer key={item.documentId}>
            <TableBodyCell>
              <IconContainer>
                <NoneSelectionIC />
              </IconContainer>
            </TableBodyCell>

            <TableBodyCell>
              <Body5 $size={14}>{item.tile}</Body5>
            </TableBodyCell>
            <TableBodyCell>
              <Body5 $size={14}>{formatDate(item.publishedAt)}</Body5>
            </TableBodyCell>
            <TableBodyCell>
              <Body5 $size={14}>{item.slug}</Body5>
            </TableBodyCell>
            <TableBodyCell>
              <Body5 $size={14}>{item.blogs.length}</Body5>
            </TableBodyCell>
          </RowContainer>
        ))}
      </tbody>

      <tfoot>
        <RowContainer>
          <TableBodyCell colSpan={6}>
            <PaginationWrapper>
              <PaginationControls>
                <PaginationButton
                  disabled={currentPage === 1}
                  onClick={() => handleChangePage(currentPage - 1)}
                >
                  Trước
                </PaginationButton>

                {Array.from({ length: totalPages }, (_, i) => (
                  <PageNumber
                    key={i}
                    $active={currentPage === i + 1}
                    onClick={() => handleChangePage(i + 1)}
                  >
                    <Body2 $color="#000">{i + 1}</Body2>
                  </PageNumber>
                ))}

                <PaginationButton
                  disabled={currentPage === totalPages}
                  onClick={() => handleChangePage(currentPage + 1)}
                >
                  Sau
                </PaginationButton>
              </PaginationControls>
            </PaginationWrapper>
          </TableBodyCell>
        </RowContainer>
      </tfoot>
    </TableWrapper>
  );
};

export default CateTable;
