"use client";
import { BlogDetails } from "@/types/blog";
import React from "react";
import { RelativeBlogImageContainer, RelativeBlogWrapper } from "./styled";
import Image from "next/image";
import { H4 } from "../../Typography/Heading.styles";
import { Body } from "../../Typography/Body.styles";
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
      <H4 $color="#000">{title}</H4>
      <Body $variant="body3" $color="#000">
        {formatDate(publishedAt)}
      </Body>
    </RelativeBlogWrapper>
  );
};

export default SmallPostCard;
