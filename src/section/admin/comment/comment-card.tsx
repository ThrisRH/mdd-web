import { CommentProps } from "@/types/comment";
import React from "react";
import { CommentCardWrapper, ReaderDetailContainer } from "./styled";
import Image from "next/image";
import { Dot, ImageContainer } from "@/section/client/blogs/blogcard/styled";

import { Column } from "@/styles/common";
import { formatDate } from "../blogs/blog-table";
import { DateTimeText } from "@/component/layout/admin/header/styled";

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
          <p className="body-1">{comment.reader.Fullname}</p>
          <Dot $scale={3} $color="rgba(0,0,0,0.5)" />
          <DateTimeText className="body-5">
            {formatDate(comment.publishedAt)}
          </DateTimeText>
        </ReaderDetailContainer>
        <p className="body-3">{comment.content}</p>
      </Column>
    </CommentCardWrapper>
  );
};

export default CommentCard;
