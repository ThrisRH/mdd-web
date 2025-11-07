"use client";
import React, { useState } from "react";
import { formatDate } from "@/section/admin/blogs/blog-table";

import PencilIC from "@/assets/svg/detail-sidebar/Pencil";
import BackIC from "@/assets/svg/interact/back-arrow";

import { useRouter } from "next/navigation";
import {
  DateDetailContainer,
  SidebarItemsContainer,
  TabsGroup,
} from "./styled";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";
import { FlexContainer, TabContainer } from "@/styles/layout";

interface Props {
  cate: CateProps | null;
}

const CateDetailSidebar = ({ cate }: Props) => {
  const [form, setForm] = useState(cate);
  const router = useRouter();
  return (
    <SidebarItemsContainer $gap={32}>
      <TabContainer
        $isSelected={false}
        onClick={() => {
          router.push("/admin-panel/mycates");
        }}
      >
        <BackIC />
        <p className="body-1">Bài viết của kênh</p>
      </TabContainer>
      {/* Vùng hiển thị 1 số thông tin của bài viết */}
      {cate && form ? (
        <FlexContainer className="basic-info">
          <FlexContainer>
            <p className="body-1">Thông tin danh mục</p>
            <p className="body-5">{cate.tile}</p>
          </FlexContainer>
          <hr style={{ border: "none", borderTop: "1px dashed #000" }} />
          <FlexContainer $gap="xs">
            {/* Ngày tạo bài */}
            <DateDetailContainer>
              <p className="body-1">Ngày tạo</p>
              <p className="body-5">{formatDate(form.createdAt)}</p>
            </DateDetailContainer>

            {/* Ngày cập nhật */}
            <DateDetailContainer>
              <p className="body-1">Ngày cập nhật</p>
              <p className="body-5">{formatDate(form.publishedAt)}</p>
            </DateDetailContainer>
          </FlexContainer>
        </FlexContainer>
      ) : null}

      <TabsGroup>
        <TabContainer $isSelected={true}>
          <PencilIC />
          <p className="body-2">Chi tiết</p>
        </TabContainer>
      </TabsGroup>
    </SidebarItemsContainer>
  );
};

export default CateDetailSidebar;
