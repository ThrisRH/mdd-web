"use client";
import React, { useCallback, useEffect, useState } from "react";
import SectionWrapper from "../Section/SectionWrapper";
import {
  CommentCardWrapper,
  CommentContent,
  CommentImageWrapper,
  TextArea,
  CommentContainer,
  SubmitField,
  SubmitButton,
  CommentBody,
} from "./Comment.styles";
import Image from "next/image";
import { Body1, Body2, Body3 } from "../Typography/Body.styles";
import { CommentInputProps, CommentProps } from "@/types/comment";

interface Props {
  documentId: string;
}
const CommentWrapper = ({ documentId }: Props) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [comment, setComment] = useState("");

  const handleGetBlogWithComments = async () => {
    try {
      const commentRes = await fetch(
        `/mmdblogsapi/comments?filters[blog][documentId][$eq]=${documentId}&populate[reader][populate]=avatar`
      );
      const commentData = await commentRes.json();

      setComments(commentData.data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const handleSubmitComment = useCallback(async () => {
    if (!comment.trim()) return;

    try {
      const response = await fetch(`/mmdblogsapi/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            content: comment,
            reader: "rlz4v0au4gae47o4uocybx0s",
            blog: documentId,
          },
        }),
      });

      setComment("");
      const data = await response.json();
      if (!response.ok) {
        return console.log(data.error);
      }

      return console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [comment]);

  useEffect(() => {
    handleGetBlogWithComments();
  }, [documentId]);

  return (
    <SectionWrapper>
      <CommentBody>
        {comments.map((item) => (
          <CommentCard
            key={item.documentId}
            documentId={item.documentId}
            reader={item.reader}
            content={item.content}
          />
        ))}
        <CommentInput
          comment={comment}
          setComment={setComment}
          handleSubmit={() => handleSubmitComment()}
        />
      </CommentBody>
    </SectionWrapper>
  );
};

// CommentCard
const CommentCard = ({ reader, content }: CommentProps) => {
  return (
    <CommentCardWrapper>
      <CommentImageWrapper>
        <Image
          src={`${reader.avatar.url}`}
          alt="reader image"
          fill
          className="object-cover rounded-full"
        />
      </CommentImageWrapper>
      <CommentContent>
        <Body1 $color="#000" $weight={700}>
          {reader.Fullname}
        </Body1>
        <Body3 $color="#000">{content}</Body3>
      </CommentContent>
    </CommentCardWrapper>
  );
};

// Comment Input
const CommentInput = ({
  comment,
  setComment,
  handleSubmit,
}: CommentInputProps) => {
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

export default CommentWrapper;
