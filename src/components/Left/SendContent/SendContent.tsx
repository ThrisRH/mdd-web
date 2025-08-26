"use client";
import React, { useEffect, useState } from "react";
import SendArea from "@/assets/svg/sendContent";
import { Body3 } from "@/components/Typography/Body.styles";
import Button from "@/components/Button/button";
import { ButtonWrapper, Input, InputWrapper } from "../Sidebar.styles";

interface CateProps {
  id: number;
  tile: string;
}
const SendContent = () => {
  const [cate, setCate] = useState<CateProps[]>([]);
  const [email, setEmail] = useState("");

  const handleGetCate = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/cates?populate=*",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setCate(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitContent = async () => {
    if (email === null || email === "") return;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: { contactEmail: email } }),
        }
      );
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCate();
  }, []);

  if (cate.length == 0) return null;
  return (
    <SendArea className="w-full max-w-[320px] h-fit">
      <Body3 $color="#000" className="w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Body3>

      <InputWrapper>
        <Input
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>

      <ButtonWrapper>
        <Button primary={false} onClickFunc={handleSubmitContent}>
          Đăng ký
        </Button>
      </ButtonWrapper>
    </SendArea>
  );
};

export default SendContent;
