"use client";
import React, { memo } from "react";
import Vector from "@/assets/svg/vector";
import rehypeRaw from "rehype-raw";
import ReactMarkDown from "react-markdown";
import {
  BlogCardWrapper,
  Container,
  Dot,
  ImageContainer,
  Line,
  LineContainer,
  VectorContainer,
} from "../blogcard/styled";
import { BlogDetails } from "@/types/blog";
import Image from "next/image";
import { FlexContainer } from "@/styles/layout";

function PostDetailComponent({
  title,
  publishedAt,
  mainContent,
  cover,
  subContent,
}: BlogDetails) {
  const formatDate = (postDate: string) => {
    const date = new Date(postDate);
    return date.toLocaleDateString("de-DE");
  };

  return (
    <BlogCardWrapper>
      {/* Vùng hiện ngày đăng */}
      <FlexContainer $flexDirection="row" $justify="center" $gap="xs">
        <Container $flex={3}>
          <LineContainer>
            <Line $left={false} />
            <VectorContainer $left={false}>
              <Vector />
            </VectorContainer>
          </LineContainer>
          <Dot></Dot>
        </Container>
        <p className="body-3">{formatDate(publishedAt)}</p>
        <Container $flex={3}>
          <Dot></Dot>
          <LineContainer>
            <VectorContainer $left={true}>
              <Vector />
            </VectorContainer>
            <Line $left={true} />
          </LineContainer>
        </Container>
      </FlexContainer>

      {/* Vùng nội dung */}
      <Container $flex={1}>
        <h1>{title}</h1>
      </Container>
      <FlexContainer $gap="md">
        <ImageContainer $variant="blog-card">
          <Image
            className="rounded-xl"
            src={`${
              cover.url.startsWith("https") ? cover.url : `/baseurl${cover.url}`
            }`}
            alt="image"
            style={{ objectFit: "cover" }}
            fill
          />
        </ImageContainer>
        <p className="body-3">{mainContent}</p>

        <ReactMarkDown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => <h1 {...props} />,
            h2: ({ node, ...props }) => <h2 {...props} />,
            h3: ({ node, ...props }) => <h3 {...props} />,
            h4: ({ node, ...props }) => <h4 {...props} />,
            p: ({ node, ...props }) => <p {...props} />,
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6" {...props} />
            ),
            li: ({ node, ...props }) => <li {...props} />,
          }}
        >
          {subContent}
        </ReactMarkDown>
      </FlexContainer>
    </BlogCardWrapper>
  );
}
const PostDetail = memo(PostDetailComponent);

export default PostDetail;
