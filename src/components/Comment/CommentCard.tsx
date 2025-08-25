import Image from "next/image";
import React from "react";
import { Body1, Body3 } from "../Typography/Body.styles";

export interface CommentProps {
  documentId: string;
  reader: Reader;
  content: string;
}

interface Reader {
  Fullname: string;
  avatar: Avatar;
}

interface Avatar {
  url: string;
}

const CommentCard = ({ reader, content }: CommentProps) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="min-w-[60px] h-[60px] relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${reader.avatar.url}`}
          alt="reader image"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Body1 $color="#000" $weight={700}>
          {reader.Fullname}
        </Body1>
        <Body3 $color="#000">{content}</Body3>
      </div>
    </div>
  );
};

export default CommentCard;
