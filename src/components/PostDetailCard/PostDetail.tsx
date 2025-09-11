"use client";
import React, { memo } from "react";
import { Body3 } from "../Typography/Body.styles";
import Vector from "@/assets/svg/vector";
import ReactMarkDown from "react-markdown";
import {
  Container,
  Dot,
  ImageContainer,
  Line,
  LineContainer,
  TimeArea,
  VectorContainer,
} from "../PostCard/PostCard.styles";
import { BlogDetails } from "@/types/blog";
import { H1, H2, H3, H4 } from "../Typography/Heading.styles";
import Image from "next/image";
import { BlogContentContainer, BlogDetailWrapper } from "./PostDetail.style";

function PostDetailComponent({
  documentId,
  title,
  publishedAt,
  mainContent,
  cover,
  subContent,
  optionImage,
}: BlogDetails) {
  const formatDate = (postDate: string) => {
    const date = new Date(postDate);
    return date.toLocaleDateString("de-DE");
  };

  return (
    <BlogDetailWrapper>
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
        <Body3 $color="#000">{formatDate(publishedAt)}</Body3>
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
      <H1>{title}</H1>
      <BlogContentContainer>
        <ImageContainer>
          <Image
            className="w-full h-[400px] rounded-xl"
            src={`/baseurl${cover.url}`}
            alt="image"
            style={{ objectFit: "cover" }}
            fill
          />
        </ImageContainer>
        <Body3 $color="#000">{mainContent}</Body3>
        {optionImage.length !== 0 &&
          optionImage.map((item, index) =>
            item.image.map((item, index) => (
              <ImageContainer key={index}>
                <Image
                  className="w-full h-[400px] rounded-xl"
                  src={`/baseurl${item.url}`}
                  alt="image"
                  style={{ objectFit: "cover" }}
                  fill
                />
              </ImageContainer>
            ))
          )}
        {subContent.map((item, index) => (
          <ReactMarkDown
            components={{
              h1: ({ node, ...props }) => <H1 $color="#000" {...props} />,
              h2: ({ node, ...props }) => <H2 $color="#000" {...props} />,
              h3: ({ node, ...props }) => <H3 {...props} />,
              h4: ({ node, ...props }) => <H4 {...props} />,
              p: ({ node, ...props }) => <Body3 $color="#000" {...props} />,
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6" {...props} />
              ),
              li: ({ node, ...props }) => (
                <Body3 $color="#000" className="" as={"li"} {...props} />
              ),
            }}
            key={index}
          >
            {item.content}
          </ReactMarkDown>
        ))}
      </BlogContentContainer>
    </BlogDetailWrapper>
  );
}
const PostDetail = memo(PostDetailComponent);

export default PostDetail;
