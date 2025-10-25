import React from "react";
import { FAQWrapper } from "@/components/Main/Styled/FAQContent.styles";
import FAQBody from "./FAQBody";
import { notFound } from "next/navigation";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { FAQData } from "@/types/faq";

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

// Lấy dữ liệu từ Serverside

async function getFAQData() {
  try {
    const res = await fetch(`${API_URL}/api/faq?populate=*`, {
      method: "GET",
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

export default async function FAQ() {
  const data = await getFAQData();
  const faq: FAQData | null = data?.data || null;

  if (!faq) notFound();

  return <FAQBody questionAnswer={faq.questionAnswer} />;
}
