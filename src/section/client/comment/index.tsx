"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  CommentCardWrapper,
  CommentContent,
  CommentImageWrapper,
  TextArea,
  SubmitField,
  SubmitButton,
  CommentBody,
  Content,
  UserName,
} from "./styled";
import Image from "next/image";
import { CommentInputProps, CommentProps } from "@/types/comment";
import { handleError } from "@/utils/handle-error";
import { toast } from "react-toastify";
import { BorderContainer } from "@/styles/layout";

interface Props {
  documentId: string;
}
const CommentWrapper = ({ documentId }: Props) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [comment, setComment] = useState("");

  const handleGetBlogWithComments = async () => {
    try {
      const commentRes = await fetch(
        `/mmdblogsapi/comments?filters[blog][documentId][$eq]=${documentId}&populate[reader][populate]=avatar`,
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
      if (!response.ok) {
        toast.error("Failed to post comment!");
      }
    } catch (error) {
      handleError();
    }
  }, [comment]);

  useEffect(() => {
    handleGetBlogWithComments();
  }, [documentId]);

  return (
    <CommentBody>
      {comments.map((item) => (
        <CommentCard
          key={item.documentId}
          documentId={item.documentId}
          reader={item.reader}
          content={item.content}
          publishedAt={item.publishedAt}
        />
      ))}
      <CommentInput
        comment={comment}
        setComment={setComment}
        handleSubmit={() => handleSubmitComment()}
      />
    </CommentBody>
  );
};

// CommentCard
const CommentCard = ({ reader, content }: CommentProps) => {
  return (
    <CommentCardWrapper>
      <CommentImageWrapper>
        <Image
          src={`${
            reader.avatar.url.startsWith("https")
              ? reader.avatar.url
              : `/baseurl${reader.avatar.url}`
          }`}
          alt="reader image"
          fill
          className="object-cover rounded-full"
        />
      </CommentImageWrapper>
      <CommentContent>
        <UserName>{reader.Fullname}</UserName>
        <p className="body-3">{content}</p>
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
    <BorderContainer $flexDirection="column">
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
          <Content>Post Comment</Content>
        </SubmitButton>
      </SubmitField>
    </BorderContainer>
  );
};

export default CommentWrapper;
