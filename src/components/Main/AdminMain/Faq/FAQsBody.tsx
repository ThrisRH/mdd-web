"use client";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import React, { useEffect, useState } from "react";

import { CustomButton } from "@/components/ui/button/styled";
import { ActionContainer, BodyContainer } from "../styles/Page.styles";
import { useToggleSelect } from "@/hooks/useToggleSelect";
import FAQsSection from "./FAQsSection";
import { FAQData } from "@/types/faq";
import { Body, Caption } from "@/styles/theme/typography";

interface Props {
  faqs: FAQData;
}

const faqBody = ({ faqs }: Props) => {
  const [data, setData] = useState(faqs);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedDeleteItems, toggleSelect } = useToggleSelect();
  const [selected, setSelected] = useState<number | null>(null);
  const [isChanged, setIsChanged] = useState(false);

  const addFAQ = () => {
    setData((prev) => ({
      ...prev,
      questionAnswer: [
        ...prev.questionAnswer,
        {
          id: Math.random(),
          question: "Điền nội dung vào đây",
          answer: "",
        },
      ],
    }));
  };

  // Chọn những field cần xóa

  const handleUpdateFAQ = async () => {
    try {
      setIsLoading(true);

      const afterUpdatedData = data.questionAnswer.filter(
        (item) => !selectedDeleteItems.includes(item.id)
      );
      const response = await fetch("/mmdblogsapi/faq?populate=*", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            questionAnswer: afterUpdatedData.map((item) => ({
              question: item.question,
              answer: item.answer,
            })),
          },
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        setIsLoading(false);
        console.log(result.error);
        return;
      }

      const result = await response.json();
      console.log(result);
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = "/admin-panel/myfaqsetting";
      }, 1000);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const origindata = JSON.stringify(faqs);
    const current = JSON.stringify(data);

    setIsChanged(origindata !== current);
  }, [data, faqs]);
  return (
    <>
      <ActionContainer $visible={isChanged}>
        <FlexContainer
          $justify="space-between"
          $width="normal"
          $flexDirection="row"
          style={{ alignItems: "center" }}
        >
          <Caption>Hãy kiểm tra kỹ các thay đổi trước khi lưu lại.</Caption>
          <CustomButton
            $bgColor="transparent"
            $border="2px solid rgba(22, 31, 57, 0.8)"
            $width="fit"
            $hoverBgColor="transparent"
            $hoverBorder="2px solid #f1dbc4"
            onClick={() => handleUpdateFAQ()}
          >
            <Body $color="#fff">Lưu thay đổi</Body>
          </CustomButton>
        </FlexContainer>
      </ActionContainer>
      <BodyContainer $flexDirection="row" $isPadding={true}>
        {/* Danh sách các faq */}
        <FAQsSection
          data={data}
          setData={setData}
          selected={selected}
          setSelected={setSelected}
          selectedDeleteItems={selectedDeleteItems}
          toggleSelect={toggleSelect}
          addNewFaq={addFAQ}
        />
      </BodyContainer>
    </>
  );
};

export default faqBody;
