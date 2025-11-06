import React, { useState } from "react";
import { CommentWrapper } from "./styled";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { BodyContainer, HeaderFormContainer } from "../styles/Page.styles";

import CommentCard from "./comment-card";
import { CommentProps } from "@/types/comment";
import { Text } from "@/styles/theme/temp-typo";

export type Props = {
  comments: CommentProps[];
};

const Comment = ({ comments }: Props) => {
  return (
    <CommentWrapper>
      <FlexContainer>
        <HeaderFormContainer>
          <Text $variant="h1">Bình luận của bài viết</Text>
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
            <Text $variant="body0" $weight={400}>
              Hiện chưa có bình luận nào
            </Text>
          </BodyContainer>
        )}
      </FlexContainer>
    </CommentWrapper>
  );
};

export default Comment;
