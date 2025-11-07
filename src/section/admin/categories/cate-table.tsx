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
import NoneSelectionIC from "@/assets/svg/interact/none-selection-square";
import SelectedIC from "@/assets/svg/interact/selected-square";

import { CateProps } from "@/component/layout/client/header/items/desktop-nav";
import { useRouter, useSearchParams } from "next/navigation";
import ActionSection from "../../../component/layout/admin/action-bar/table-delete-bar";
import { Row } from "@/styles/common";
import TablePaginationBar from "@/component/pagination/admin-table-pagination";
import { TitleBlogNoWrap } from "@/styles/typography";

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
    router.push(`/cate-details/${documentId}`);
  };
  return (
    <BodyContainer $align="center" $justify="center">
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
                  <TitleBlogNoWrap className="body-1">
                    {item.title}
                  </TitleBlogNoWrap>
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

        {categories.length !== 0 ? (
          <>
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
                    <p className="body-3">{item.tile}</p>
                  </TableBodyCell>
                  <TableBodyCell
                    onClick={() => {
                      handleToDetail(item.documentId);
                    }}
                  >
                    <p className="body-3">{formatDate(item.publishedAt)}</p>
                  </TableBodyCell>
                  <TableBodyCell
                    onClick={() => {
                      handleToDetail(item.documentId);
                    }}
                  >
                    <p className="body-3">{item.slug}</p>
                  </TableBodyCell>
                  <TableBodyCell
                    onClick={() => {
                      handleToDetail(item.documentId);
                    }}
                  >
                    <p className="body-3">{item.blogs.length}</p>
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
          </>
        ) : (
          <tbody>
            <RowContainer>
              <TableBodyCell colSpan={6}>
                <Row $justify="center">
                  <p className="body-1">Bạn chưa có danh mục nào!</p>
                </Row>
              </TableBodyCell>
            </RowContainer>
          </tbody>
        )}
      </TableWrapper>
    </BodyContainer>
  );
};

export default CateTable;
