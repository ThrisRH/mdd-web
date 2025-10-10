"use client";
import MoreIC from "@/assets/svg/more";
import BellIC from "@/assets/svg/noticebell";
import WriteNewIC from "@/assets/svg/writingblog";
import RobotIC from "@/assets/svg/airobot"; // Chat with AI function
import LogoImg from "@/assets/image/logo.png";

import React, { useState } from "react";
import {
  ActionArea,
  CreateBlogButton,
  HeaderWrapper,
  LogoArea,
} from "./Layout.styles";
import { H5 } from "@/components/Typography/Heading.styles";
import Image from "next/image";
import { Body3 } from "@/components/Typography/Body.styles";
import CreateBlog from "@/components/Main/AdminMain/Blogs/CreateBlog";

const Header = () => {
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);
  return (
    <>
      {isCreatePopupOpen && (
        <CreateBlog setIsCreatePopUpOpen={setIsCreatePopupOpen} />
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
          <CreateBlogButton onClick={() => setIsCreatePopupOpen(true)}>
            <WriteNewIC />
            <Body3 $fontWeight="600">Tạo</Body3>
          </CreateBlogButton>
        </ActionArea>
      </HeaderWrapper>
    </>
  );
};

export default Header;
