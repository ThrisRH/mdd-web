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

const PostDetail = memo(
  ({
    documentId: string,
    title,
    publishedAt,
    mainContent,
    cover,
    subContent,
    optionImage,
  }: BlogDetails) => {
    const formatDate = (postDate: string) => {
      const date = new Date(postDate);

      const formatted = date.toLocaleDateString("de-DE");
      return formatted;
    };
    console.log("re-render");

    return (
      <div className="flex flex-col flex-1 gap-8 items-center">
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
        <div className="flex flex-col w-full gap-6">
          <ImageContainer>
            <Image
              className="w-full h-[400px] rounded-xl"
              src={`http://localhost:1337${cover.url}`}
              alt="image"
              objectFit="cover"
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
                    src={`http://localhost:1337${item.url}`}
                    alt="image"
                    objectFit="cover"
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
        </div>
      </div>
    );
  }
);

export default PostDetail;
