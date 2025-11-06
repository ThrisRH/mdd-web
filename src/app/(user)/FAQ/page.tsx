import React from "react";
import { notFound } from "next/navigation";
import { FAQData } from "@/types/faq";
import { handleError } from "@/utils/handle-error";
import { fetchFAQ } from "@/utils/data/faq-api";
import FAQBody from "@/app/screens/client/faq";

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

// Lấy dữ liệu từ Serverside

async function getFAQData() {
  try {
    const res = await fetch(`${API_URL}/api/faq?populate=*`, {
      method: "GET",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error.message);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    handleError();
  }
}

export default async function FAQ() {
  const faq: FAQData = await fetchFAQ();

  if (!faq) notFound();

  return <FAQBody questionAnswer={faq.questionAnswer} />;
}
