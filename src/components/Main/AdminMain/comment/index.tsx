import React, { useState } from "react";
import { CommentWrapper } from "./styled";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { DetailContainer, HeaderFormContainer } from "../styles/Page.styles";
import { H5 } from "@/components/Typography/Heading.styles";
import { CustomButton } from "@/components/ui/button/styled";
import { Loader } from "../../Loading.styles";
import { Body, Body1, CustomBody } from "@/components/Typography/Body.styles";

import CommentCard from "./comment-card";
import { CommentProps } from "@/types/comment";

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
          <H5 $size={24}>Bình luận của bài viết</H5>
        </HeaderFormContainer>
        <Body1 $fontSize="18px" $weight={600}>
          Chi tiết
        </Body1>
        {comments ? (
          comments.map((item) => (
            <CommentCard key={item.documentId} comment={item} />
          ))
        ) : (
          <Body $variant="body1">Hiện chưa có bình luận nào</Body>
        )}
      </FlexContainer>
    </CommentWrapper>
  );
};

export default Comment;
