"use client";
import React from "react";
import { SidebarContainer, SidebarItemsContainer } from "../Layout.styles";

import Image from "next/image";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { ImageContainer } from "@/components/blogs/blogcard/styled";
import { formatDate } from "@/components/Main/AdminMain/Blogs/BlogTable";

import BackIC from "@/assets/svg/Interact/BackArrow";
import { usePathname, useRouter } from "next/navigation";
import { DateDetailContainer, TabsGroup } from "./Sidebar.styles";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { useBlogdetailcontext } from "@/context/blogdetailcontext/index";
import { BlogDetailTabs } from "@/app/(admin)/config/tabsConfig";
import { Text } from "@/styles/theme/typography";
import { Column } from "@/components/ui/common/styled";

const BlogDetailSidebar = () => {
  const { value } = useBlogdetailcontext();
  const pathname = usePathname();
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
              <Text $variant="body4" $color="#4F4F4F">
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
                $isSelected={pathname.startsWith(path)}
                onClick={() => {
                  router.push(`${path}/${value.slug}`);
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
      </SidebarContainer>
    );
};

export default BlogDetailSidebar;
