import React, { useState } from "react";
import { CommentWrapper } from "./styled";
import { BodyContainer, HeaderFormContainer } from "../styles/Page.styles";

import CommentCard from "./comment-card";
import { CommentProps } from "@/types/comment";
import { FlexContainer } from "@/styles/layout";

export type Props = {
  comments: CommentProps[];
};

const Comment = ({ comments }: Props) => {
  return (
    <CommentWrapper>
      <FlexContainer>
        <HeaderFormContainer>
          <h1>Bình luận của bài viết</h1>
        </HeaderFormContainer>
        {comments.length !== 0 ? (
          comments.map((item) => (
            <CommentCard key={item.documentId} comment={item} />
          ))
        ) : (
          <BodyContainer
            $isPadding={true}
            $justify="center"
            $flexDirection="row"
          >
            <p className="body-1">Hiện chưa có bình luận nào</p>
          </BodyContainer>
        )}
      </FlexContainer>
    </CommentWrapper>
  );
};

export default Comment;
