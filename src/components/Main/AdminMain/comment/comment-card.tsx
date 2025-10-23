import { CommentProps } from "@/types/comment";
import React from "react";

type CommentCardProps = {
  comment: CommentProps;
};

const CommentCard = ({ comment }: CommentCardProps) => {
  return <div>{comment.content}</div>;
};

export default CommentCard;
