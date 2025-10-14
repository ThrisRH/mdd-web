"use client";
import React, { useState } from "react";
import {
  SidebarItemsContainer,
  SidebarWrapper,
  TabContainer,
} from "../AdminLayout/Layout.styles";

import Image from "next/image";
import { H3 } from "@/components/Typography/Heading.styles";
import { BlogDetails } from "@/types/blog";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";
import { ImageContainer, Line } from "@/components/PostCard/PostCard.styles";
import { Body1, Body2, CustomBody } from "@/components/Typography/Body.styles";
import { formatDate } from "@/components/Main/AdminMain/Blogs/BlogTable";

import CommentIC from "@/assets/svg/sidebar/comment";
import BackIC from "@/assets/svg/Interact/BackArrow";
import { useRouter } from "next/navigation";

interface Props {
  blog: BlogDetails;
}

const BlogDetailSidebar = ({ blog }: Props) => {
  const [form, setForm] = useState(blog);
  const router = useRouter();
  return (
    <SidebarItemsContainer>
      <TabContainer
        $isSelected={false}
        onClick={() => {
          router.back();
        }}
      >
        <BackIC />
        <CustomBody $size={16} $weight={600} $color="#4f4f4f">
          Bài viết của kênh
        </CustomBody>
      </TabContainer>
      <ImageContainer $responsiveHeight="160px">
        <Image
          fill
          alt="Avatar image"
          style={{ objectFit: "cover", borderRadius: "16px" }}
          src={
            form.cover.url.startsWith("https")
              ? form.cover.url
              : `/baseurl${form.cover.url}`
          }
        />
      </ImageContainer>
      <H3>Thông tin bài viết</H3>
      <Line $width={200} />

      <FlexContainer $width="100%" $gap={6}>
        {/* Ngày tạo bài */}
        <FlexContainer
          $width="100%"
          $flexDirection="row"
          $justify="space-between"
          $align="flex-end"
        >
          <Body1 $fontSize="18px" $color="#1C1C1C">
            Ngày tạo:
          </Body1>
          <CustomBody $color="#1C1C1C">
            {formatDate(form.publishedAt)}
          </CustomBody>
        </FlexContainer>

        {/* Ngày cập nhật */}
        <FlexContainer
          $width="100%"
          $flexDirection="row"
          $justify="space-between"
          $align="flex-end"
        >
          <Body1 $fontSize="18px" $color="#1C1C1C">
            Ngày cập nhật:
          </Body1>
          <CustomBody $color="#1C1C1C">{formatDate(form.updatedAt)}</CustomBody>
        </FlexContainer>
      </FlexContainer>

      <TabContainer $isSelected={false}>
        <CommentIC />
        <Body2 $color="#4f4f4f">Bình luận</Body2>
      </TabContainer>
    </SidebarItemsContainer>
  );
};

export default BlogDetailSidebar;
