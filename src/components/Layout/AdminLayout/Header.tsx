"use client";
import MoreIC from "@/assets/svg/more";
import BellIC from "@/assets/svg/noticebell";
import WriteNewIC from "@/assets/svg/writingblog";
import RobotIC from "@/assets/svg/airobot"; // Chat with AI function
import LogoImg from "@/assets/image/logo.png";

import AddBlogIC from "@/assets/svg/Interact/AddArticle";
import UploadIC from "@/assets/svg/Interact/Upload";

import React, { useState } from "react";
import {
  HeaderItemsGroup,
  CreateBlogButton,
  DropdownCreateContainer,
  HeaderContainer,
  ActionWrapper,
} from "./Layout.styles";
import { H5 } from "@/components/Typography/Heading.styles";
import Image from "next/image";
import { Body } from "@/components/Typography/Body.styles";
import CreateBlog from "@/components/Main/AdminMain/Blogs/CreateBlog";
import CreateCategory from "@/components/Main/AdminMain/Categories/CreateCate";
import Link from "next/link";
import { TabContainer } from "@/styles/components/layout/Layout.styles";

const Header = () => {
  const [isSelectionCreateOpen, setIsSelectionCreateOpen] = useState(false);
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  const [isCreateCatePopupOpen, setIsCreateCatePopupOpen] = useState(false);
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
          <MoreIC className="expand-tab-bar" color={"#1C1C1C"} />
          <Image src={LogoImg} width={28} height={28} alt="MddLogo" />
          <H5 $size={20}>MDD Blogs</H5>
        </HeaderItemsGroup>

        <HeaderItemsGroup>
          <RobotIC id="ai-hint" />
          <BellIC id="notification" />
          <Link href={"/"}>
            <Body $variant="body5" $color="#4f6ffa">
              Về trang người dùng
            </Body>
          </Link>
          <ActionWrapper className="relative">
            <CreateBlogButton
              onClick={() => {
                setIsSelectionCreateOpen(!isSelectionCreateOpen);
              }}
            >
              <WriteNewIC />
              <Body $variant="body3">Tạo</Body>
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
                  <Body $variant="body4" $size={14}>
                    Tạo bài viết mới
                  </Body>
                </TabContainer>

                <TabContainer
                  $isSelected={false}
                  onClick={() => {
                    setIsCreateCatePopupOpen(true);
                    setIsSelectionCreateOpen(false);
                  }}
                >
                  <AddBlogIC />
                  <Body $variant="body4" $size={14}>
                    Tạo danh mục mới
                  </Body>
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
