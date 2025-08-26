"use client";
import React, { useEffect, useState } from "react";
import TopicTitle from "@/assets/svg/topicSelect";
import { InputWrapper, Select } from "../Sidebar.styles";

interface CateProps {
  id: number;
  tile: string;
}
const Topic = () => {
  const [cate, setCate] = useState<CateProps[]>([]);

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

  useEffect(() => {
    handleGetCate();
  }, []);

  if (cate.length == 0) return null;
  return (
    <TopicTitle className="w-full max-w-[320px] h-fit">
      <InputWrapper>
        <Select className="flex-1 outline-0">
          {cate.map((item) => (
            <option key={item.id}>{item.tile}</option>
          ))}
        </Select>
      </InputWrapper>
    </TopicTitle>
  );
};

export default Topic;
