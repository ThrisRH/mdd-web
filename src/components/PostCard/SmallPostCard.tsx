"use client";
import { BlogDetails } from "@/types/blog";
import React from "react";
import { SmallPostContainer } from "./PostCard.styles";
import Image from "next/image";
import { H4 } from "../Typography/Heading.styles";
import { Body2, Body3 } from "../Typography/Body.styles";
import { useRouter } from "next/navigation";

const SmallPostCard = ({
  title,
  publishedAt,
  cover,
  documentId,
}: BlogDetails) => {
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
    <SmallPostContainer role="button" onClick={() => handleToBlog(documentId)}>
      <div className="h-[200px] w-full relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${cover.url}`}
          alt={"blogImage"}
          fill
          objectFit="cover"
        />
      </div>
      <H4 $color="#000">{title}</H4>
      <Body3 $color="#000">{formatDate(publishedAt)}</Body3>
    </SmallPostContainer>
  );
};

export default SmallPostCard;
