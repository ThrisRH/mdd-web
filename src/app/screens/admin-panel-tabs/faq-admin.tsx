"use client";
import Loading from "@/app/(user)/loading";
import { TitleContainer } from "@/components/Layout/AdminLayout/Layout.styles";
import FAQsBody from "@/components/Main/AdminMain/Faq/FAQsBody";
import NotFound from "@/components/Main/NotFound";
import { MainContentContainer } from "@/styles/components/layout/Layout.styles";
import { Text } from "@/styles/theme/typography";
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
        <Text $variant="h1">CÀI ĐẶT HỎI VÀ ĐÁP (FAQ)</Text>
      </TitleContainer>

      <FAQsBody faqs={faqs} />
    </MainContentContainer>
  );
};

export default FAQScreen;
