"use client";
import React, { useState } from "react";
import { SidebarItemsContainer } from "../Layout.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { Body } from "@/components/Typography/Body.styles";
import { formatDate } from "@/components/Main/AdminMain/Blogs/BlogTable";

import CommentIC from "@/assets/svg/sidebar/comment";
import PencilIC from "@/assets/svg/sidebar/Pencil";
import BackIC from "@/assets/svg/Interact/BackArrow";

import { useRouter } from "next/navigation";
import { CateProps } from "../../UserLayout/Header/DesktopNav";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { DateDetailContainer, TabsGroup } from "./Sidebar.styles";

interface Props {
  cate: CateProps;
}

const CateDetailSidebar = ({ cate }: Props) => {
  const [form, setForm] = useState(cate);
  const router = useRouter();
  return (
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
      <FlexContainer $gap={12}>
        <FlexContainer>
          <Body $variant="body1">Thông tin danh mục</Body>
          <Body $variant="body4" $color="#4f4f4f">
            {cate.tile}
          </Body>
        </FlexContainer>
        <hr style={{ border: "none", borderTop: "1px dashed #000" }} />
        <FlexContainer $gap={6}>
          {/* Ngày tạo bài */}
          <DateDetailContainer>
            <Body $variant="body1">Ngày tạo</Body>
            <Body $variant="body5" $color="#4f4f4f">
              {formatDate(form.createdAt)}
            </Body>
          </DateDetailContainer>

          {/* Ngày cập nhật */}
          <DateDetailContainer>
            <Body $variant="body1">Ngày cập nhật</Body>
            <Body $variant="body5" $color="#4f4f4f">
              {formatDate(form.publishedAt)}
            </Body>
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
            Bài viết
          </Body>
        </TabContainer>
      </TabsGroup>
    </SidebarItemsContainer>
  );
};

export default CateDetailSidebar;
