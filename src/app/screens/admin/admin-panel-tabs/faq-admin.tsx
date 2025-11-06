"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "./styled";
import FAQsBody from "@/section/admin/Faq/FAQsBody";
import NotFound from "@/section/client/main/not-found";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { FAQData } from "@/types/faq";
import React, { useEffect, useState } from "react";

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
