"use client";
import SendContent from "@/components/LeftSideBar/SendContent/SendContent";
import InfoCard from "@/components/LeftSideBar/Info/InfoCard";
import Topic from "@/components/LeftSideBar/Topic/Topic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IgImage from "@/assets/image/ig_pic.png";
import FavoriteField from "@/components/LeftSideBar/FavoriteField/FavoriteField";
import { Blog } from "@/components/Main/PageContainer";
import UserDetails from "@/components/Main/UserDetails";

const page = () => {
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
    <UserDetails>
      <InfoCard textColor="#000" isNavbar={false} isDetails={true} />
      <Topic />
      <SendContent />
      <FavoriteField blogs={blogs} />
      <Image src={IgImage} alt="Ig Image" width={322} height={322} />
    </UserDetails>
  );
};

export default page;
