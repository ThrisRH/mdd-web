"use client";
import React, { ReactNode, useEffect, useState } from "react";
import InfoCard from "@/components/LeftSideBar/Info/InfoCard";
import SendContent from "@/components/LeftSideBar/SendContent/SendContent";
import Topic from "@/components/LeftSideBar/Topic/Topic";
import Image from "next/image";
import IgImage from "@/assets/image/ig_pic.png";
import FavoriteField from "../LeftSideBar/FavoriteField/FavoriteField";
import { MainContainer, SideBar } from "./Styled/PageContainer.styles";

interface PostProps {
  children: ReactNode;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
}

const PageContainer = ({ children }: PostProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "/mmdblogsapi/blogs?pagination[page]=1&pagination[pageSize]=6&populate=*"
      );
      const data = await res.json();
      if (!res.ok) return;
      setBlogs(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <MainContainer>
      {children}
      <SideBar>
        <InfoCard isDetails={false} isNavbar={false} />
        <Topic />
        <FavoriteField blogs={blogs} />
        <SendContent />
        <Image src={IgImage} alt="Ig Image" width={322} height={322} />
      </SideBar>
    </MainContainer>
  );
};

export default PageContainer;
