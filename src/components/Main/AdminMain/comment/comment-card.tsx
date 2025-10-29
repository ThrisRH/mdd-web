import { CommentProps } from "@/types/comment";
import React from "react";
import { CommentCardWrapper, ReaderDetailContainer } from "./styled";
import Image from "next/image";
import { Dot, ImageContainer } from "@/components/blogs/blogcard/styled";
import { Caption, Text } from "@/styles/theme/typography";
import { Column, Row } from "@/components/ui/common/styled";
import { formatDate } from "../Blogs/BlogTable";

type CommentCardProps = {
  comment: CommentProps;
};

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <CommentCardWrapper>
      <ImageContainer $variant="cmt-avatar">
        <Image
          fill
          className="rounded-full"
          style={{ objectFit: "cover" }}
          src={`${
            comment.reader.avatar.url.startsWith("https")
              ? comment.reader.avatar.url
              : `/baseurl${comment.reader.avatar.url}`
          }`}
          alt="image"
        />
      </ImageContainer>
      <Column $gap="none" $width="fit-content">
        <ReaderDetailContainer $align="center">
          <Text $variant="body1">{comment.reader.Fullname}</Text>
          <Dot $scale={3} $color="rgba(0,0,0,0.5)" />
          <Text $variant="body5" $color="rgba(0,0,0,0.5)">
            {formatDate(comment.publishedAt)}
          </Text>
        </ReaderDetailContainer>
        <Caption $weight={400}>{comment.content}</Caption>
      </Column>
    </CommentCardWrapper>
  );
};

export default CommentCard;
