"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  TableWrapper,
  TableBodyCell,
  TableHeaderCell,
  RowContainer,
  IconContainer,
  BodyContainer,
} from "../styles/Page.styles";
import { Body5, Body } from "@/components/Typography/Body.styles";
import NoneSelectionIC from "@/assets/svg/Interact/NoneSelectionSquare";
import SelectedIC from "@/assets/svg/Interact/SelectedSquare";

import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import { useRouter, useSearchParams } from "next/navigation";
import ActionSection from "../Components/ActionSection";
import TablePaginationBar from "@/components/Layout/Pagination/ForTable/TablePaginationBar";

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

  const [selectedBlogs, setSelectedCates] = useState<Set<string>>(new Set());

  const selectCate = (id: string) => {
    setSelectedCates((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const selectAll = () => {
    setSelectedCates((prev) => {
      if (prev.size === categories.length) {
        return new Set();
      } else {
        return new Set(categories.map((categories) => categories.documentId));
      }
    });
  };

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

  const handleToDetail = (documentId: string) => {
    router.push(`/catedetails/${documentId}`);
  };
  return (
    <BodyContainer>
      <ActionSection forFeature="cates" selectedItems={selectedBlogs} />
      <TableWrapper>
        <thead>
          <tr>
            {TableList.map((item, index) => (
              <TableHeaderCell
                key={index}
                $topPosition={selectedBlogs.size !== 0 ? "156px" : "90px"}
              >
                {item.title ? (
                  <Body $variant="body1" $size={16}>
                    {item.title}
                  </Body>
                ) : (
                  <IconContainer onClick={selectAll}>
                    {selectedBlogs.size !== 0 ? (
                      <SelectedIC />
                    ) : (
                      <NoneSelectionIC />
                    )}
                  </IconContainer>
                )}
              </TableHeaderCell>
            ))}
          </tr>
        </thead>

        <tbody>
          {categories.map((item) => (
            <RowContainer key={item.documentId}>
              <TableBodyCell>
                <IconContainer onClick={() => selectCate(item.documentId)}>
                  {selectedBlogs.has(item.documentId) ? (
                    <SelectedIC />
                  ) : (
                    <NoneSelectionIC />
                  )}
                </IconContainer>
              </TableBodyCell>

              <TableBodyCell
                onClick={() => {
                  handleToDetail(item.documentId);
                }}
              >
                <Body $variant="body4" $size={14}>
                  {item.tile}
                </Body>
              </TableBodyCell>
              <TableBodyCell
                onClick={() => {
                  handleToDetail(item.documentId);
                }}
              >
                <Body5 $size={14}>{formatDate(item.publishedAt)}</Body5>
              </TableBodyCell>
              <TableBodyCell
                onClick={() => {
                  handleToDetail(item.documentId);
                }}
              >
                <Body5 $size={14}>{item.slug}</Body5>
              </TableBodyCell>
              <TableBodyCell
                onClick={() => {
                  handleToDetail(item.documentId);
                }}
              >
                <Body5 $size={14}>{item.blogs.length}</Body5>
              </TableBodyCell>
            </RowContainer>
          ))}
        </tbody>

        <tfoot>
          <TablePaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            handleChangePage={handleChangePage}
          />
        </tfoot>
      </TableWrapper>
    </BodyContainer>
  );
};

export default CateTable;
