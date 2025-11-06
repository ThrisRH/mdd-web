"use client";
import React, { useEffect, useState } from "react";
import SendArea from "@/assets/svg/send-content";
import { Input, InputWrapper } from "../styled";
import MainButton from "@/component/button/main-button";

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
    <SendArea>
      <p className="body-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>

      <InputWrapper>
        <Input
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>

      <MainButton variant="secondary" onClick={handleSubmitContent}>
        Đăng ký
      </MainButton>
    </SendArea>
  );
};

export default SendContent;
