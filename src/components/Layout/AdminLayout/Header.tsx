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
  ActionArea,
  CreateBlogButton,
  DropdownCreateContainer,
  HeaderWrapper,
  LogoArea,
  TabContainer,
} from "./Layout.styles";
import { H5 } from "@/components/Typography/Heading.styles";
import Image from "next/image";
import { Body3, CustomBody } from "@/components/Typography/Body.styles";
import CreateBlog from "@/components/Main/AdminMain/Blogs/CreateBlog";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";
import CreateCategory from "@/components/Main/AdminMain/Categories/CreateCate";

const Header = () => {
  const [isSelectionCreateOpen, setIsSelectionOpen] = useState(false);
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
      <HeaderWrapper>
        <LogoArea>
          <MoreIC color={"#1C1C1C"} />{" "}
          <Image src={LogoImg} width={28} height={28} alt="MddLogo" />
          <H5 $size={20}>MDD Blogs</H5>
        </LogoArea>

        <ActionArea>
          <RobotIC />
          <BellIC />
          <FlexContainer className="relative">
            <CreateBlogButton
              onClick={() => {
                setIsSelectionOpen(true);
              }}
            >
              <WriteNewIC />
              <Body3 $fontWeight="600">Tạo</Body3>
            </CreateBlogButton>
            {isSelectionCreateOpen && (
              <DropdownCreateContainer>
                <TabContainer
                  onClick={() => {
                    setIsCreatePopupOpen(true);
                    setIsSelectionOpen(false);
                  }}
                  $gap={16}
                  $padding="0px 12px"
                  $isSelected={false}
                >
                  <UploadIC />
                  <CustomBody $size={14}>Tạo bài viết mới</CustomBody>
                </TabContainer>

                <TabContainer
                  $gap={16}
                  $padding="0px 12px"
                  $isSelected={false}
                  onClick={() => {
                    setIsCreateCatePopupOpen(true);
                    setIsSelectionOpen(false);
                  }}
                >
                  <AddBlogIC />
                  <CustomBody $size={14}>Tạo danh mục mới</CustomBody>
                </TabContainer>
              </DropdownCreateContainer>
            )}
          </FlexContainer>
        </ActionArea>
      </HeaderWrapper>
    </>
  );
};

export default Header;
