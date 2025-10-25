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
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { Body, Caption, Text } from "@/styles/theme/typography";

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
            <Line></Line>
            <VectorContainer $left={false}>
              <Vector />
            </VectorContainer>
          </LineContainer>
          <Dot></Dot>
        </Container>
        <Caption>{formatDate(publishedAt)}</Caption>
        <Container $flex={3}>
          <Dot></Dot>
          <LineContainer>
            <VectorContainer $left={true}>
              <Vector />
            </VectorContainer>
            <Line></Line>
          </LineContainer>
        </Container>
      </FlexContainer>

      {/* Vùng nội dung */}
      <Container $flex={1}>
        <Text $variant="h1">{title}</Text>
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
        <Body $align="justify" $whiteSpace="normal">
          {mainContent}
        </Body>

        <ReactMarkDown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => (
              <Text $variant="h1" $align="justify" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <Text $variant="h2" $align="justify" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <Text $variant="h3" $align="justify" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <Text $variant="h4" $align="justify" {...props} />
            ),
            p: ({ node, ...props }) => <Caption $align="justify" {...props} />,
            ol: ({ node, ...props }) => (
              <Body
                $align="justify"
                as={"ol"}
                className="list-decimal pl-6"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <Body $align="justify" as={"li"} {...props} />
            ),
            // strong: ({ node, ...props }) => (
            //   <CustomBody $whiteSpace="normal" $color="#000" $weight={600} />
            // ),
            // em: ({ node, ...props }) => (
            //   <CustomBody $whiteSpace="normal" $color="#000" $weight={400} />
            // ),
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
