"use client";
import React, { ReactNode } from "react";
import {
  TableWrapper,
  ContentField,
  IconContaner,
  ImageContainer,
  MainContent,
  RowContainer,
  SelectIconContainer,
  TableBodyCell,
  TableFlexWrapper,
  TableHeaderCell,
} from "../styles/Page.styles";
import { Body5, Body3, Body4 } from "@/components/Typography/Body.styles";
import { BlogDetails } from "@/types/blog";
import NoneSelectionIC from "@/assets/svg/Interact/NoneSelectionSquare";
import SelectedIC from "@/assets/svg/Interact/SelectedSquare";
import Image from "next/image";

import {
  PaginationButton,
  PaginationControls,
  PaginationWrapper,
} from "@/components/Layout/AdminLayout/Layout.styles";
import { PageNumber } from "@/components/Pagination/PaginationBar.styles";
import { CateProps } from "@/components/Layout/DesktopNav";

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

const formatDate = (postDate: string) => {
  const date = new Date(postDate);
  const formatted = date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formatted;
};

const CateTable = ({ categories }: { categories: CateProps[] }) => {
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
                <IconContaner>{item.icon}</IconContaner>
              )}
            </TableHeaderCell>
          ))}
        </tr>
      </thead>

      <tbody>
        {categories.map((item) => (
          <RowContainer key={item.documentId}>
            <TableBodyCell>
              <IconContaner>
                <NoneSelectionIC />
              </IconContaner>
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
                <PaginationButton disabled={true} onClick={() => {}}>
                  Trước
                </PaginationButton>

                {Array.from({ length: 2 }, (_, i) => (
                  <PageNumber key={i} $active={true} onClick={() => {}}>
                    {i + 1}
                  </PageNumber>
                ))}

                <PaginationButton disabled={false} onClick={() => {}}>
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
