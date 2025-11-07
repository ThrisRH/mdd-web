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
import Image from "next/image";
import ActionSection from "../../../component/layout/admin/action-bar/table-delete-bar";
import { Row } from "@/styles/common";
import { BlogDetails } from "@/types/blog";
import TablePaginationBar from "@/component/pagination/admin-table-pagination";

import NoneSelectionIC from "@/assets/svg/interact/none-selection-square";
import SelectedIC from "@/assets/svg/interact/selected-square";
import { TitleBlogNoWrap } from "@/styles/typography";
import { BlogMainContentText } from "@/component/layout/admin/header/search-blog-card/styled";

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
    router.push(`/blog-details/${slug}/info`);
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
                  <TitleBlogNoWrap>{item.title}</TitleBlogNoWrap>
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

        {posts.length !== 0 ? (
          <>
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
                        <p className="body-1">{item.title}</p>
                        <MainContent>
                          <BlogMainContentText className="body-3">
                            {item.mainContent}
                          </BlogMainContentText>
                        </MainContent>
                      </ContentField>
                    </TableFlexWrapper>
                  </TableBodyCell>

                  <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                    <p className="body-3">{formatDate(item.publishedAt)}</p>
                  </TableBodyCell>

                  <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                    <p className="body-3">{item.cate?.tile}</p>
                  </TableBodyCell>
                  <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                    <p className="body-3">{item.comments?.length}</p>
                  </TableBodyCell>
                  <TableBodyCell onClick={() => handleToBlogDetail(item.slug)}>
                    <p className="body-3">{item.slug}</p>
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

export default BlogTable;
