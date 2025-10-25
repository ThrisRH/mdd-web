"use client";
import React, { useEffect, useState } from "react";
import TopicTitle from "@/assets/svg/topicSelect";
import { InputWrapper, Select } from "../styled";
import { usePathname, useRouter } from "next/navigation";

interface CateProps {
  id: number;
  documentId: string;
  tile: string;
  slug: string;
}
const Topic = () => {
  const [cate, setCate] = useState<CateProps[]>([]);
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const pathname = usePathname();

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value) {
      router.push(`/${value}`);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    handleGetCate();
  }, []);

  useEffect(() => {
    const currentId = pathname.split("/")[1]; // lấy phần sau dấu /
    if (currentId) {
      setSelected(currentId);
    } else {
      setSelected("");
    }
  }, [pathname]);

  if (cate.length === 0) return null;

  if (cate.length == 0) return null;
  return (
    <TopicTitle className="w-full max-w-[320px] h-fit">
      <InputWrapper>
        <Select value={selected} onChange={handleChange}>
          <option value="">-- Tất cả --</option>
          {cate.map((item) => (
            <option key={item.id} value={item.documentId}>
              {item.tile}
            </option>
          ))}
        </Select>
      </InputWrapper>
    </TopicTitle>
  );
};

export default Topic;
