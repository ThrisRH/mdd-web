"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button/button";
import Vector from "@/assets/svg/vector";

import {
  CardContainer,
  ImageContainer,
  TimeArea,
  Line,
  LineContainer,
  VectorContainer,
  Container,
  Dot,
} from "./PostCard.styles";
import { Body2, Body3 } from "../Typography/Body.styles";
import { H1 } from "../Typography/Heading.styles";
import { useRouter } from "next/navigation";

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

interface PostCardProps {
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
        `http://localhost:1337/api/blogs/${post.documentId}?populate=*`,
        { method: "GET" }
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return;
      }

      setBlogAvatar(data.data);
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const handleToDetail = (postSlug: string) => {
    router.push(`http://localhost:3000/blogs/${postSlug}`);
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
    <CardContainer>
      <TimeArea>
        <Container $flex={3}>
          <LineContainer>
            <Line></Line>
            <VectorContainer $left={false}>
              <Vector />
            </VectorContainer>
          </LineContainer>
          <Dot></Dot>
        </Container>
        <Body3 $color="#000">{formatDate(post.publishedAt)}</Body3>
        <Container $flex={3}>
          <Dot></Dot>
          <LineContainer>
            <VectorContainer $left={true}>
              <Vector />
            </VectorContainer>
            <Line></Line>
          </LineContainer>
        </Container>
      </TimeArea>
      <H1>{post.title}</H1>
      <ImageContainer>
        {blogAvatar?.cover && (
          <Image
            className="w-full h-full rounded-xl"
            src={`http://localhost:1337${blogAvatar.cover.url}`}
            alt="image"
            style={{ objectFit: 'cover' }}
            fill
          />
        )}
      </ImageContainer>
      <Body2>{post.mainContent}</Body2>
      <Button primary={false} onClickFunc={() => handleToDetail(post.slug)}>
        Xem thêm
      </Button>
    </CardContainer>
  );
};

export default PostCard;
