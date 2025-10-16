"use client";
import React, { memo } from "react";
import { Body3, CustomBody } from "../Typography/Body.styles";
import Vector from "@/assets/svg/vector";
import rehypeRaw from "rehype-raw";
import ReactMarkDown from "react-markdown";
import {
  Container,
  Dot,
  ImageContainer,
  Line,
  LineContainer,
  VectorContainer,
} from "../PostCard/PostCard.styles";
import { BlogDetails } from "@/types/blog";
import { H1, H2, H3, H4 } from "../Typography/Heading.styles";
import Image from "next/image";
import { FlexContainer } from "@/styles/components/layout/Common.styles";

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
    <FlexContainer $gap={32}>
      {/* Vùng hiện ngày đăng */}
      <FlexContainer $flexDirection="row" $justify="center" $gap={6}>
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
      </FlexContainer>

      {/* Vùng nội dung */}
      <Container $flex={1}>
        <H1>{title}</H1>
      </Container>
      <FlexContainer $gap={24}>
        <ImageContainer>
          <Image
            className="w-full h-[400px] rounded-xl"
            src={`${
              cover.url.startsWith("https") ? cover.url : `/baseurl${cover.url}`
            }`}
            alt="image"
            style={{ objectFit: "cover" }}
            fill
          />
        </ImageContainer>
        <CustomBody
          $align="justify"
          $whiteSpace="normal"
          $color="#000"
          $fontSize={20}
        >
          {mainContent}
        </CustomBody>

        <ReactMarkDown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => <H1 $color="#000" {...props} />,
            h2: ({ node, ...props }) => <H2 $color="#000" {...props} />,
            h3: ({ node, ...props }) => <H3 {...props} />,
            h4: ({ node, ...props }) => <H4 {...props} />,
            p: ({ node, ...props }) => (
              <CustomBody $whiteSpace="normal" $color="#000" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6" {...props} />
            ),
            li: ({ node, ...props }) => (
              <CustomBody
                $whiteSpace="normal"
                $color="#000"
                className=""
                as={"li"}
                {...props}
              />
            ),
            strong: ({ node }) => (
              <CustomBody $whiteSpace="normal" $color="#000" $weight={600} />
            ),
            em: ({ node }) => (
              <CustomBody $whiteSpace="normal" $color="#000" $weight={400} />
            ),
          }}
        >
          {subContent}
        </ReactMarkDown>
      </FlexContainer>
    </FlexContainer>
  );
}
const PostDetail = memo(PostDetailComponent);

export default PostDetail;
