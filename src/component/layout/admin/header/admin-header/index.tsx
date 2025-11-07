"use client";
import WriteNewIC from "@/assets/svg/writing-blog";
import LogoImg from "@/assets/image/logo.png";
import AddBlogIC from "@/assets/svg/interact/add-article";
import UploadIC from "@/assets/svg/interact/upload";

import React, { useState } from "react";

import Image from "next/image";
import CreateBlog from "@/section/admin/blogs/blog-create-form";
import CreateCategory from "@/section/admin/categories/cate-create-form";
import Link from "next/link";
import { TabContainer } from "@/styles/layout";
import { Row } from "@/styles/common";
import { useRouter } from "next/navigation";
import Notification from "../notification";
import SearchBarAdmin from "../searchbar";
import {
  ActionWrapper,
  CreateBlogButton,
  DropdownCreateContainer,
  HeaderContainer,
  HeaderItemsGroup,
  LogoText,
} from "./styled";
import { TextCanChangeColor } from "@/styles/typography";

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
            <LogoText className="logoText">MDD Blogs</LogoText>
          </Row>
        </HeaderItemsGroup>

        <HeaderItemsGroup className="SearchArea">
          <SearchBarAdmin />
        </HeaderItemsGroup>

        <HeaderItemsGroup>
          <Notification />
          <Link href={"/"}>Về trang người dùng</Link>
          <ActionWrapper className="relative">
            <CreateBlogButton
              onClick={() => {
                setIsSelectionCreateOpen(!isSelectionCreateOpen);
              }}
            >
              <WriteNewIC />
              <p className="body-3">Tạo</p>
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
                  <p className="body-3">Tạo bài viết mới</p>
                </TabContainer>

                <TabContainer
                  $isSelected={false}
                  onClick={() => {
                    setIsCreateCatePopupOpen(true);
                    setIsSelectionCreateOpen(false);
                  }}
                >
                  <AddBlogIC />
                  <p className="body-3">Tạo danh mục mới</p>
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
