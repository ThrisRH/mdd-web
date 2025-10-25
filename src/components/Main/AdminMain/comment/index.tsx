import React, { useState } from "react";
import { CommentWrapper } from "./styled";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { HeaderFormContainer } from "../styles/Page.styles";

import CommentCard from "./comment-card";
import { CommentProps } from "@/types/comment";
import { Text } from "@/styles/theme/typography";

export type Props = {
  comments: CommentProps[];
};

const Comment = ({ comments }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <CommentWrapper>
      <FlexContainer>
        <HeaderFormContainer>
          <Text $variant="h1">Bình luận của bài viết</Text>
        </HeaderFormContainer>
        <Text $variant="body0">Chi tiết</Text>
        {comments ? (
          comments.map((item) => (
            <CommentCard key={item.documentId} comment={item} />
          ))
        ) : (
          <Text $variant="body1">Hiện chưa có bình luận nào</Text>
        )}
      </FlexContainer>
    </CommentWrapper>
  );
};

export default Comment;
