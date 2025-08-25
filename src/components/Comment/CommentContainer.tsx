"use client";
import React, { useCallback, useEffect, useState } from "react";
import SectionWrapper from "../Section/SectionWrapper";
import { H4 } from "../Typography/Heading.styles";
import CommentCard, { CommentProps } from "./CommentCard";
import CommentInput from "./CommentInput";

interface Props {
  documentId: string;
}
const CommentContainer = ({ documentId }: Props) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [comment, setComment] = useState("");

  const handleGetBlogWithComments = async () => {
    try {
      const commentRes = await fetch(
        `http://localhost:1337/api/comments?filters[blog][documentId][$eq]=${documentId}&populate[reader][populate]=avatar`
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/comments`,
        {
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
        }
      );

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
      <div className="flex flex-col gap-4 w-full">
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
      </div>
    </SectionWrapper>
  );
};

export default CommentContainer;
