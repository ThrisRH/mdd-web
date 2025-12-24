"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "./styled";
import NotFound from "@/section/client/main/not-found";
import { FAQData } from "@/types/faq";
import React, { useEffect, useState } from "react";
import { MainContentContainer } from "@/styles/layout";
import FAQsBody from "@/section/admin/Faq/FAQsBody";

type Props = {
  faqs: FAQData;
};
const FAQScreen = ({ faqs }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (faqs) {
      setLoading(false);
    }
  }, [faqs]);

  if (loading) {
    return (
      <MainContentContainer>
        <Loading />
      </MainContentContainer>
    );
  }

  if (!faqs.questionAnswer) {
    return (
      <MainContentContainer>
        <NotFound />
      </MainContentContainer>
    );
  }

  return (
    <MainContentContainer>
      <TitleContainer>
        <h1>CÀI ĐẶT HỎI VÀ ĐÁP (FAQ)</h1>
      </TitleContainer>

      <FAQsBody faqs={faqs} />
    </MainContentContainer>
  );
};

export default FAQScreen;
