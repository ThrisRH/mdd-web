"use client";
import React, { useState } from "react";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { formatDate } from "@/section/admin/Blogs/BlogTable";

import PencilIC from "@/assets/svg/detail-sidebar/Pencil";
import BackIC from "@/assets/svg/interact/back-arrow";

import { useRouter } from "next/navigation";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import {
  DateDetailContainer,
  SidebarItemsContainer,
  TabsGroup,
} from "./styled";
import { Text } from "@/styles/theme/temp-typo";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";

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
