"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import {
  TableWrapper,
  ContentField,
  IconContainer,
  ImageContainer,
  MainContent,
  RowContainer,
  TableBodyCell,
  TableFlexWrapper,
  TableHeaderCell,
  BodyContainer,
} from "../styles/Page.styles";
import { Body5, Body3, Body } from "@/components/Typography/Body.styles";
import { BlogDetails } from "@/types/blog";
import NoneSelectionIC from "@/assets/svg/Interact/NoneSelectionSquare";
import SelectedIC from "@/assets/svg/Interact/SelectedSquare";
import Image from "next/image";
import ActionSection from "../Components/ActionSection";
import TablePaginationBar from "@/components/Layout/Pagination/ForTable/TablePaginationBar";

type TableItem = {
  title?: string;
  icon?: ReactNode;
  selectedIcon?: ReactNode;
};

interface BlogTableProps {
  posts: BlogDetails[];
  currentPage: number;
  totalPages: number;
  setPageNumber: (page: number) => void;
}

const TableList: TableItem[] = [
  { icon: <NoneSelectionIC />, selectedIcon: <SelectedIC /> },
  { title: "Bài viết" },
  { title: "Ngày đăng" },
  { title: "Danh mục" },
  { title: "Bình luận" },
  { title: "Tên rút gọn" },
];

export const formatDate = (postDate: string) => {
  const date = new Date(postDate);
  const formatted = date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formatted;
};

const BlogTable = ({
  posts,
  currentPage,
  setPageNumber,
  totalPages,
}: BlogTableProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedBlogs, setSelectedBlogs] = useState<Set<string>>(new Set());

  const selectBlog = (id: string) => {
    setSelectedBlogs((prev) => {
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
    setSelectedBlogs((prev) => {
      if (prev.size === posts.length) {
        return new Set();
      } else {
        return new Set(posts.map((post) => post.documentId));
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

  // Đến trang chi tiết
  const handleToBlogDetail = (slug: string) => {
    router.push(`/blog-details/info/${slug}`);
  };

  return (
    <BodyContainer>
      {/* Thanh hành động đối với bài blogs đã chọn */}
      <ActionSection forFeature="blogs" selectedItems={selectedBlogs} />

      {/* Bảng các bài blogs */}
      <TableWrapper>
        <thead>
          <tr>
            {TableList.map((item, index) => (
              <TableHeaderCell
                key={index}
                $topPosition={selectedBlogs.size !== 0 ? "156px" : "90px"}
              >
                {item.title ? (
                  <Body $variant="body1" $color="#000" $size={16}>
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
          {posts.map((item) => (
            <RowContainer key={item.documentId}>
              <TableBodyCell>
                <IconContainer onClick={() => selectBlog(item.documentId)}>
                  {selectedBlogs.has(item.documentId) ? (
                    <SelectedIC />
                  ) : (
                    <NoneSelectionIC />
                  )}
                </IconContainer>
              </TableBodyCell>

              <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
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
                    <Body $variant="body4" $color="#000">
                      {item.title}
                    </Body>
                    <MainContent>
                      <Body5 $size={14} $color="#7a7a7a">
                        {item.mainContent}
                      </Body5>
                    </MainContent>
                  </ContentField>
                </TableFlexWrapper>
              </TableBodyCell>

              <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                <Body5 $size={14}>{formatDate(item.publishedAt)}</Body5>
              </TableBodyCell>

              <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                <Body5 $size={14}>{item.cate?.tile}</Body5>
              </TableBodyCell>
              <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                <Body5 $size={14}>{item.comments?.length}</Body5>
              </TableBodyCell>
              <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                <Body5 $size={14}>{item.slug}</Body5>
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

export default BlogTable;
