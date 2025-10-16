"use client";
import React, { useEffect, useState } from "react";
import SendArea from "@/assets/svg/sendContent";
import { Body, Body3 } from "@/components/Typography/Body.styles";
import { ButtonWrapper, Input, InputWrapper } from "../Sidebar.styles";
import { MainButtonContainer } from "@/styles/components/buttons/Button.styles";

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
      console.log(error);
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
      throw new Error("Failed to send content;");
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
        <MainButtonContainer $variant="secondary" onClick={handleSubmitContent}>
          <Body $variant="body2">Đăng ký</Body>
        </MainButtonContainer>
      </ButtonWrapper>
    </SendArea>
  );
};

export default SendContent;
