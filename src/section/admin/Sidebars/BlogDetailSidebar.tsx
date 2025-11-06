"use client";
import React from "react";

import Image from "next/image";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { ImageContainer } from "@/section/client/blogs/blogcard/styled";
import { formatDate } from "@/section/admin/Blogs/BlogTable";

import BackIC from "@/assets/svg/interact/back-arrow";
import { usePathname, useRouter } from "next/navigation";
import {
  DateDetailContainer,
  SidebarItemsContainer,
  TabsGroup,
} from "./styled";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { useBlogdetailcontext } from "@/context/blogdetailcontext/index";
import { BlogDetailTabs } from "@/config/tabs-config";
import { Text } from "@/styles/theme/temp-typo";
import { Column } from "@/styles/common";

const BlogDetailSidebar = () => {
  const { value } = useBlogdetailcontext();
  const pathname = usePathname();
  const router = useRouter();

  if (value)
    return (
      <SidebarItemsContainer $gap={32}>
        <TabContainer
          $isSelected={false}
          onClick={() => {
            router.push("/admin-panel/myblogs");
          }}
        >
          <BackIC />
          <Text $variant="body1" $color="#4f4f4f">
            Bài viết của kênh
          </Text>
        </TabContainer>
        {/* Vùng hiển thị 1 số thông tin của bài viết */}
        <FlexContainer className="basic-info">
          <ImageContainer $variant="sidebar-blog-detail">
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
          <Column $gap="none">
            <Text $variant="body0">Thông tin bài viết</Text>
            <Text $variant="body4" $color="#4F4F4F" $whiteSpace="normal">
              {value.title}
            </Text>
          </Column>
          <hr style={{ border: "none", borderTop: "1px dashed #000" }} />
          <FlexContainer $gap="xs">
            {/* Ngày tạo bài */}
            <DateDetailContainer>
              <Text $variant="body1">Ngày tạo:</Text>
              <Text $variant="body5">{formatDate(value.createdAt)}</Text>
            </DateDetailContainer>

            {/* Ngày cập nhật */}
            <DateDetailContainer>
              <Text $variant="body1">Ngày cập nhật:</Text>
              <Text $variant="body5">{formatDate(value.publishedAt)}</Text>
            </DateDetailContainer>
          </FlexContainer>
        </FlexContainer>

        <TabsGroup>
          {BlogDetailTabs.map(({ path, icon: Icon, label }) => (
            <TabContainer
              key={path}
              $isSelected={pathname.endsWith(path)}
              onClick={() => {
                router.push(`/blog-details/${value.slug}${path}`);
              }}
            >
              <Icon />
              <Text $variant="body2" $color="#4f4f4f">
                {label}
              </Text>
            </TabContainer>
          ))}
        </TabsGroup>
      </SidebarItemsContainer>
    );
};

export default BlogDetailSidebar;
