"use client";
import React, { useState } from "react";
import { SidebarItemsContainer } from "../Layout.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { formatDate } from "@/components/Main/AdminMain/Blogs/BlogTable";

import CommentIC from "@/assets/svg/sidebar/comment";
import PencilIC from "@/assets/svg/sidebar/Pencil";
import BackIC from "@/assets/svg/Interact/BackArrow";

import { useRouter } from "next/navigation";
import { CateProps } from "../../UserLayout/Header/DesktopNav";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { DateDetailContainer, TabsGroup } from "./Sidebar.styles";
import { Text } from "@/styles/theme/typography";

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
        <Text $variant="body1" $color="#4f4f4f">
          Bài viết của kênh
        </Text>
      </TabContainer>
      {/* Vùng hiển thị 1 số thông tin của bài viết */}
      {cate && form ? (
        <FlexContainer className="basic-info">
          <FlexContainer>
            <Text $variant="body1">Thông tin danh mục</Text>
            <Text $variant="body4" $color="#4f4f4f">
              {cate.tile}
            </Text>
          </FlexContainer>
          <hr style={{ border: "none", borderTop: "1px dashed #000" }} />
          <FlexContainer $gap="xs">
            {/* Ngày tạo bài */}
            <DateDetailContainer>
              <Text $variant="body1">Ngày tạo</Text>
              <Text $variant="body5" $color="#4f4f4f">
                {formatDate(form.createdAt)}
              </Text>
            </DateDetailContainer>

            {/* Ngày cập nhật */}
            <DateDetailContainer>
              <Text $variant="body1">Ngày cập nhật</Text>
              <Text $variant="body5" $color="#4f4f4f">
                {formatDate(form.publishedAt)}
              </Text>
            </DateDetailContainer>
          </FlexContainer>
        </FlexContainer>
      ) : null}

      <TabsGroup>
        <TabContainer $isSelected={true}>
          <PencilIC />
          <Text $variant="body2" $color="#4f4f4f">
            Chi tiết
          </Text>
        </TabContainer>
      </TabsGroup>
    </SidebarItemsContainer>
  );
};

export default CateDetailSidebar;
