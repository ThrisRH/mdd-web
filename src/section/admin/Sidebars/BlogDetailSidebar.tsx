"use client";
import React from "react";

import Image from "next/image";
import { ImageContainer } from "@/section/client/blogs/blogcard/styled";
import { formatDate } from "@/section/admin/blogs/blog-table";

import BackIC from "@/assets/svg/interact/back-arrow";
import { usePathname, useRouter } from "next/navigation";
import {
  DateDetailContainer,
  SidebarItemsContainer,
  TabsGroup,
} from "./styled";
import { useBlogdetailcontext } from "@/context/blogdetailcontext/index";
import { BlogDetailTabs } from "@/config/tabs-config";
import { Column } from "@/styles/common";
import { FlexContainer, TabContainer } from "@/styles/layout";

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
          <p className="body-1">Bài viết của kênh</p>
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
            <p className="body-1">Thông tin bài viết</p>
            <p className="body-3">{value.title}</p>
          </Column>
          <hr style={{ border: "none", borderTop: "1px dashed #000" }} />
          <FlexContainer $gap="xs">
            {/* Ngày tạo bài */}
            <DateDetailContainer>
              <p className="body-1">Ngày tạo:</p>
              <p className="body-5">{formatDate(value.createdAt)}</p>
            </DateDetailContainer>

            {/* Ngày cập nhật */}
            <DateDetailContainer>
              <p className="body-1">Ngày cập nhật:</p>
              <p className="body-5">{formatDate(value.publishedAt)}</p>
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
              <p className="body-2">{label}</p>
            </TabContainer>
          ))}
        </TabsGroup>
      </SidebarItemsContainer>
    );
};

export default BlogDetailSidebar;
