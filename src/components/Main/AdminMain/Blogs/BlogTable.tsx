"use client";
import React, { ReactNode } from "react";
import {
  TableWrapper,
  ContentField,
  IconContainer,
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

type TableItem = {
  title?: string;
  icon?: ReactNode;
  selectedIcon?: ReactNode;
};

const TableList: TableItem[] = [
  { icon: <NoneSelectionIC />, selectedIcon: <SelectedIC /> },
  { title: "Bài viết" },
  { title: "Ngày đăng" },
  { title: "Danh mục" },
  { title: "Bình luận" },
  { title: "Tên rút gọn" },
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

const BlogTable = ({ posts }: { posts: BlogDetails[] }) => {
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
        {posts.map((item) => (
          <RowContainer key={item.documentId}>
            <TableBodyCell>
              <IconContainer>
                <NoneSelectionIC />
              </IconContainer>
            </TableBodyCell>

            <TableBodyCell>
              <TableFlexWrapper>
                <ImageContainer $height="72px">
                  <Image
                    src={
                      item.cover.url.startsWith("https")
                        ? item.cover.url
                        : `/baseurl${item.cover.url}`
                    }
                    alt="image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageContainer>

                <ContentField>
                  <Body4>{item.title}</Body4>
                  <MainContent>
                    <Body5 $size={14} $color="#7a7a7a">
                      {item.mainContent}
                    </Body5>
                  </MainContent>
                </ContentField>
              </TableFlexWrapper>
            </TableBodyCell>

            <TableBodyCell>
              <Body5 $size={14}>{formatDate(item.publishedAt)}</Body5>
            </TableBodyCell>

            <TableBodyCell>
              <Body5 $size={14}>{item.cate?.tile}</Body5>
            </TableBodyCell>
            <TableBodyCell>
              <Body5 $size={14}>{item.comments?.length}</Body5>
            </TableBodyCell>
            <TableBodyCell>
              <Body5 $size={14}>{item.slug}</Body5>
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

export default BlogTable;
