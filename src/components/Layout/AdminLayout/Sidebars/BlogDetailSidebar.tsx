"use client";
import React, { useState } from "react";
import { SidebarContainer, SidebarItemsContainer } from "../Layout.styles";

import Image from "next/image";
import { BlogDetails } from "@/types/blog";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { ImageContainer } from "@/components/blogs/blogcard/styled";
import { Body } from "@/components/Typography/Body.styles";
import { formatDate } from "@/components/Main/AdminMain/Blogs/BlogTable";

import CommentIC from "@/assets/svg/sidebar/comment";
import PencilIC from "@/assets/svg/sidebar/Pencil";
import BackIC from "@/assets/svg/Interact/BackArrow";
import { useRouter } from "next/navigation";
import { DateDetailContainer, TabsGroup } from "./Sidebar.styles";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { useBlogdetailcontext } from "@/context/blogdetailcontext/index";

const BlogDetailSidebar = () => {
  const { value } = useBlogdetailcontext();
  const router = useRouter();

  if (value)
    return (
      <SidebarContainer>
        <SidebarItemsContainer $gap={32}>
          <TabContainer
            $isSelected={false}
            onClick={() => {
              router.back();
            }}
          >
            <BackIC />
            <Body $variant="body1" $color="#4f4f4f">
              Bài viết của kênh
            </Body>
          </TabContainer>
          {/* Vùng hiển thị 1 số thông tin của bài viết */}
          <FlexContainer className="basic-info">
            <ImageContainer $responsiveHeight="120px">
              <Image
                fill
                alt="Avatar image"
                style={{ objectFit: "cover", borderRadius: "6px" }}
                src={
                  value.cover.url.startsWith("https")
                    ? value.cover.url
                    : `/baseurl${value.cover.url}`
                }
              />
            </ImageContainer>
            <FlexContainer>
              <Body $variant="body0">Thông tin bài viết</Body>
              <Body $variant="body4" $color="#4F4F4F">
                {value.title}
              </Body>
            </FlexContainer>
            <hr style={{ border: "none", borderTop: "1px dashed #000" }} />
            <FlexContainer $gap="xs">
              {/* Ngày tạo bài */}
              <DateDetailContainer>
                <Body $variant="body1">Ngày tạo:</Body>
                <Body $variant="body5">{formatDate(value.createdAt)}</Body>
              </DateDetailContainer>

              {/* Ngày cập nhật */}
              <DateDetailContainer>
                <Body $variant="body1">Ngày cập nhật:</Body>
                <Body $variant="body5">{formatDate(value.publishedAt)}</Body>
              </DateDetailContainer>
            </FlexContainer>
          </FlexContainer>

          <TabsGroup>
            <TabContainer $isSelected={true}>
              <PencilIC />
              <Body $variant="body2" $color="#4f4f4f">
                Chi tiết
              </Body>
            </TabContainer>
            <TabContainer $isSelected={false}>
              <CommentIC />
              <Body $variant="body2" $color="#4f4f4f">
                Bình luận
              </Body>
            </TabContainer>
          </TabsGroup>
        </SidebarItemsContainer>
      </SidebarContainer>
    );
};

export default BlogDetailSidebar;
