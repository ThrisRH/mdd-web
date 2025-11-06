"use client";
import WriteNewIC from "@/assets/svg/writing-blog";
import LogoImg from "@/assets/image/logo.png";
import AddBlogIC from "@/assets/svg/interact/add-article";
import UploadIC from "@/assets/svg/interact/upload";

import React, { useState } from "react";

import Image from "next/image";
import CreateBlog from "@/section/admin/Blogs/CreateBlog";
import CreateCategory from "@/section/admin/Categories/CreateCate";
import Link from "next/link";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { Row } from "@/styles/common";
import { useRouter } from "next/navigation";
import { Text } from "@/styles/theme/typography";
import Notification from "../notification";
import SearchBarAdmin from "../searchbar";
import {
  ActionWrapper,
  CreateBlogButton,
  DropdownCreateContainer,
  HeaderContainer,
  HeaderItemsGroup,
} from "./styled";

const Header = () => {
  const [isSelectionCreateOpen, setIsSelectionCreateOpen] = useState(false);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isCreateCatePopupOpen, setIsCreateCatePopupOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      {isCreatePopupOpen && (
        <CreateBlog setIsCreatePopUpOpen={setIsCreatePopupOpen} />
      )}

      {isCreateCatePopupOpen && (
        <CreateCategory setIsCreateCatePopupOpen={setIsCreateCatePopupOpen} />
      )}
      <HeaderContainer>
        <HeaderItemsGroup>
          <Row
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/admin-panel/myblogs");
            }}
          >
            <Image src={LogoImg} width={28} height={28} alt="MddLogo" />
            <Text
              className="logoText"
              $whiteSpace="nowrap"
              $variant="h5"
              $size={20}
            >
              MDD Blogs
            </Text>
          </Row>
        </HeaderItemsGroup>

        <HeaderItemsGroup className="SearchArea">
          <SearchBarAdmin />
        </HeaderItemsGroup>

        <HeaderItemsGroup>
          <Notification />
          <Link href={"/"}>
            <Text $variant="body5" $color="#4f6ffa">
              Về trang người dùng
            </Text>
          </Link>
          <ActionWrapper className="relative">
            <CreateBlogButton
              onClick={() => {
                setIsSelectionCreateOpen(!isSelectionCreateOpen);
              }}
            >
              <WriteNewIC />
              <Text $variant="body3">Tạo</Text>
            </CreateBlogButton>
            {isSelectionCreateOpen && (
              <DropdownCreateContainer>
                <TabContainer
                  onClick={() => {
                    setIsCreatePopupOpen(true);
                    setIsSelectionCreateOpen(false);
                  }}
                  $isSelected={false}
                >
                  <UploadIC />
                  <Text $variant="body4" $size={14}>
                    Tạo bài viết mới
                  </Text>
                </TabContainer>

                <TabContainer
                  $isSelected={false}
                  onClick={() => {
                    setIsCreateCatePopupOpen(true);
                    setIsSelectionCreateOpen(false);
                  }}
                >
                  <AddBlogIC />
                  <Text $variant="body4" $size={14}>
                    Tạo danh mục mới
                  </Text>
                </TabContainer>
              </DropdownCreateContainer>
            )}
          </ActionWrapper>
        </HeaderItemsGroup>
      </HeaderContainer>
    </>
  );
};

export default Header;
