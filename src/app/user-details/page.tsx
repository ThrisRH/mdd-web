"use client";
import SendContent from "@/components/Left/SendContent/SendContent";
import InfoCard from "@/components/Left/Info/InfoCard";
import Topic from "@/components/Left/Topic/Topic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IgImage from "@/assets/image/ig_pic.png";
import FavoriteField from "@/components/Left/FavoriteField/FavoriteField";
import { Blog } from "@/components/Main/PageContainer";

const page = () => {
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
    <div className="flex-1 flex flex-col gap-10 items-center my-10 px-6">
      <InfoCard textColor="#000" isNavbar={false} isDetails={true} />
      <Topic />
      <SendContent />
      <FavoriteField blogs={blogs} />
      <Image src={IgImage} alt="Ig Image" width={322} height={322} />
    </div>
  );
};

export default page;
