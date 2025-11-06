"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Vector from "@/assets/svg/vector";

import {
  ImageContainer,
  Line,
  LineContainer,
  VectorContainer,
  Container,
  Dot,
  BlogCardWrapper,
} from "./styled";
import { useRouter } from "next/navigation";
import MainButton from "../../../../component/button/main-button";
import { Row } from "@/styles/common";
import { handleError } from "@/utils/handle-error";

interface Post {
  documentId: string;
  slug: string;
  title: string;
  publishedAt: string;
  mainContent: string;
  cover: Cover;
}

interface Cover {
  url: string;
}

export interface PostCardProps {
  index?: number;
  post: Post;
}

interface BlogCoverFormat {
  url: string;
  width: number;
  height: number;
}

interface BlogCover {
  id: number;
  name: string;
  url: string;
  formats: {
    thumbnail: BlogCoverFormat;
    small?: BlogCoverFormat;
    medium?: BlogCoverFormat;
    large?: BlogCoverFormat;
  };
}

interface Blog {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  mainContent: string;
  cover: BlogCover;
}

const PostCard = ({ index, post }: PostCardProps) => {
  const [blogAvatar, setBlogAvatar] = useState<Blog>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGetInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/mmdblogsapi/blogs/${post.documentId}?populate=*`,
        { method: "GET" },
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return;
      }

      setBlogAvatar(data.data);
    } catch (error: any) {
      handleError();
    } finally {
      setLoading(false);
    }
  };

  const handleToDetail = (postSlug: string) => {
    router.push(`/blogs/${postSlug}`);
  };

  useEffect(() => {
    handleGetInfo();
  }, []);

  const formatDate = (postDate: string) => {
    const date = new Date(postDate);

    const formatted = date.toLocaleDateString("de-DE");
    return formatted;
  };

  return (
    <BlogCardWrapper>
      <Row $justify="center" $align="center" $gap="sm">
        <Container $flex={3}>
          <LineContainer>
            <Line $left={false} />
            <VectorContainer $left={false}>
              <Vector />
            </VectorContainer>
          </LineContainer>
          <Dot></Dot>
        </Container>
        <p className="body-3">{formatDate(post.publishedAt)}</p>
        <Container $flex={3}>
          <Dot></Dot>
          <LineContainer>
            <VectorContainer $left={true}>
              <Vector />
            </VectorContainer>
            <Line $left={true} />
          </LineContainer>
        </Container>
      </Row>
      <h1 style={{ textAlign: "center" }}>{post.title}</h1>
      <ImageContainer $variant="blog-card">
        {blogAvatar?.cover && (
          <Image
            className="w-full h-full rounded-xl"
            src={`${
              blogAvatar.cover.url.startsWith("https")
                ? blogAvatar.cover.url
                : `/baseurl${blogAvatar.cover.url}`
            }`}
            alt="image"
            style={{ objectFit: "cover" }}
            fill
          />
        )}
      </ImageContainer>
      <p className="body-2">{post.mainContent}</p>
      <MainButton variant="secondary" onClick={() => handleToDetail(post.slug)}>
        Xem thêm
      </MainButton>
    </BlogCardWrapper>
  );
};

export default PostCard;
