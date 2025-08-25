import React, { useState } from "react";
import {
  CommentContainer,
  SubmitButton,
  SubmitField,
  TextArea,
} from "./CommentInput.styles";
import { Body2, Body3 } from "../Typography/Body.styles";

interface Props {
  comment: string;
  setComment: (value: string) => void;
  handleSubmit: () => void;
}
const CommentInput = ({ comment, setComment, handleSubmit }: Props) => {
  return (
    <CommentContainer>
      <TextArea
        id="comment"
        name="comment"
        value={comment}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setComment(e.target.value)
        }
        placeholder="Write a comment"
      />
      <SubmitField>
        <SubmitButton onClick={handleSubmit}>
          <Body2 $size={20}>Post Comment</Body2>
        </SubmitButton>
      </SubmitField>
    </CommentContainer>
  );
};

export default CommentInput;
