"use client";
import React, { useEffect, useState } from "react";
import SendArea from "@/assets/svg/sendContent";
import { ButtonWrapper, Input, InputWrapper } from "../styled";
import MainButton from "@/components/ui/button/main_button";
import { Caption } from "@/styles/theme/typography";

interface CateProps {
  id: number;
  tile: string;
}
const SendContent = () => {
  const [cate, setCate] = useState<CateProps[]>([]);
  const [email, setEmail] = useState("");

  const handleGetCate = async () => {
    try {
      const response = await fetch("/mmdblogsapi/cates?populate=*", {
        method: "GET",
      });
      const data = await response.json();
      setCate(data.data);
    } catch (error) {
      return null;
    }
  };

  const handleSubmitContent = async () => {
    if (email === null || email === "") return;
    try {
      const response = await fetch(`/mmdblogsapi/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { contactEmail: email } }),
      });
      if (!response.ok) {
        return;
      }
      setEmail("");
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    handleGetCate();
  }, []);

  if (cate.length == 0) return null;
  return (
    <SendArea className="w-full max-w-[320px] h-fit">
      <Caption className="w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Caption>

      <InputWrapper>
        <Input
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>

      <ButtonWrapper>
        <MainButton variant="secondary" onClick={handleSubmitContent}>
          Đăng ký
        </MainButton>
      </ButtonWrapper>
    </SendArea>
  );
};

export default SendContent;
