"use client";
import { BlogDetails } from "@/types/blog";
import React from "react";
import { RelativeBlogImageContainer, RelativeBlogWrapper } from "./styled";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SmallPostCard = ({ title, publishedAt, cover, slug }: BlogDetails) => {
  const router = useRouter();

  const formatDate = (postDate: string) => {
    const date = new Date(postDate);

    const formatted = date.toLocaleDateString("de-DE");
    return formatted;
  };

  const handleToBlog = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  return (
    <RelativeBlogWrapper role="button" onClick={() => handleToBlog(slug)}>
      <RelativeBlogImageContainer>
        <Image
          style={{ objectFit: "cover" }}
          src={`${
            cover.url.startsWith("https") ? cover.url : `/baseurl${cover.url}`
          }`}
          alt={"blogImage"}
          fill
        />
      </RelativeBlogImageContainer>
      <h4>{title}</h4>
      <p className="body-3">{formatDate(publishedAt)}</p>
    </RelativeBlogWrapper>
  );
};

export default SmallPostCard;
