"use client";
import React, { ReactNode, useEffect, useState } from "react";
import InfoCard from "@/components/Left/Info/InfoCard";
import SendContent from "@/components/Left/SendContent/SendContent";
import Topic from "@/components/Left/Topic/Topic";
import Image from "next/image";
import IgImage from "@/assets/image/ig_pic.png";
import FavoriteField from "../Left/FavoriteField/FavoriteField";

interface PostProps {
  children: ReactNode;
}

export interface Blog {
  id: string;
  title: string;
}

const PageContainer = ({ children }: PostProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/blogs?pagination[page]=1&pagination[pageSize]=6&populate=*"
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
    <div className="font-sans flex flex-row items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {children}
      <div className="flex-1 hidden md:flex flex-col gap-10 items-center mt-[110px]">
        <InfoCard isDetails={false} isNavbar={false} />
        <Topic />
        <FavoriteField blogs={blogs} />
        <SendContent />
        <Image src={IgImage} alt="Ig Image" width={322} height={322} />
      </div>
    </div>
  );
};

export default PageContainer;
