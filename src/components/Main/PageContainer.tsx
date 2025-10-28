"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { MainContainer } from "@/styles/components/layout/Layout.styles";
import Sidebar from "../Layout/UserLayout/LeftSideBar";

interface PostProps {
  children: ReactNode;
}

export type Blog = {
  id: string;
  title: string;
  slug: string;
};

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
      return null;
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <MainContainer>
      {children}
      <Sidebar blogs={blogs} />
    </MainContainer>
  );
};

export default PageContainer;
