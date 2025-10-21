"use client";
import { FAQProps } from "@/app/(user)/FAQ/page";
import { CustomBody } from "@/components/Typography/Body.styles";
import {
  BorderContainer,
  FlexContainer,
} from "@/styles/components/layout/Common.styles";
import React, { useState } from "react";

import {
  CustomButton,
  MainButtonContainer,
} from "@/styles/components/buttons/Button.styles";
import { Loader } from "../../Loading.styles";
import { BodyContainer, ProfileSideContainer } from "../styles/Page.styles";
import { useToggleSelect } from "@/hooks/useToggleSelect";
import FAQsSection from "./FAQsSection";

interface Props {
  Faqs: FAQProps;
}

const FAQsBody = ({ Faqs }: Props) => {
  const [data, setData] = useState(Faqs);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedDeleteItems, toggleSelect } = useToggleSelect();
  const [selected, setSelected] = useState<number | null>(null);

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
        window.location.href = "/adminpanel/myfaqsetting";
      }, 1000);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <BodyContainer $flexDirection="row" $isPadding={true}>
      {/* Danh sách các FAQs */}
      <FAQsSection
        data={data}
        selected={selected}
        setSelected={setSelected}
        selectedDeleteItems={selectedDeleteItems}
        toggleSelect={toggleSelect}
        setData={setData}
        addNewFaq={addFAQ}
      />

      {/* Vùng chứa bảng action */}
      <ProfileSideContainer>
        <BorderContainer $gap="md">
          <FlexContainer $gap="xs">
            <CustomBody $weight={600} $size={16}>
              Xác nhận chỉnh sửa
            </CustomBody>
            <CustomBody $size={14} $whiteSpace="normal" $color="#4F4F4F">
              Hãy kiểm tra kỹ các thay đổi trước khi lưu lại.
            </CustomBody>
          </FlexContainer>
          {isLoading ? (
            <CustomButton
              $isDisable={true}
              $bgColor="#aeaeae"
              $hoverBgColor="#f45c5c"
            >
              <Loader />
              <CustomBody $color="#fff" $weight={600}>
                Đang thay đổi
              </CustomBody>
            </CustomButton>
          ) : (
            <MainButtonContainer
              $variant="secondary"
              onClick={() => handleUpdateFAQ()}
              $isDisable={isLoading}
            >
              Lưu thay đổi
            </MainButtonContainer>
          )}
        </BorderContainer>
      </ProfileSideContainer>
    </BodyContainer>
  );
};

export default FAQsBody;
