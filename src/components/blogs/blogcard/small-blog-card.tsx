"use client";
import { BlogDetails } from "@/types/blog";
import React from "react";
import { RelativeBlogImageContainer, RelativeBlogWrapper } from "./styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Text } from "@/styles/theme/typography";

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
      <Text $variant="h4">{title}</Text>
      <Text $variant="body3">{formatDate(publishedAt)}</Text>
    </RelativeBlogWrapper>
  );
};

export default SmallPostCard;
