"use client";
import React, { useEffect, useState } from "react";

import { ButtonWrapper, CustomButton } from "@/component/button/styled";
import { ActionContainer, BodyContainer } from "../styles/Page.styles";
import { useToggleSelect } from "@/hooks/use-toggle-select";
import FAQsSection from "./FAQsSection";
import { FAQData } from "@/types/faq";
import { handleError } from "@/utils/handle-error";
import { ActionBarText, WhiteText } from "@/styles/typography";
import { FlexContainer } from "@/styles/layout";
import { Row } from "@/styles/common";
import { Loader } from "@/section/client/main/loading/styled";

interface Props {
  faqs: FAQData;
}

const faqBody = ({ faqs }: Props) => {
  const [data, setData] = useState(faqs);
  const [isUpdating, setIsUpdating] = useState(false);
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
      setIsUpdating(true);

      const afterUpdatedData = data.questionAnswer.filter(
        (item) => !selectedDeleteItems.includes(item.id),
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
        setIsUpdating(false);
        return null;
      }

      setTimeout(() => {
        setIsUpdating(false);
        window.location.href = "/admin-panel/myfaqsetting";
      }, 1000);
    } catch (error: any) {
      handleError();
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    const origindata = JSON.stringify(faqs);
    const current = JSON.stringify(data);

    setIsChanged(origindata !== current || selectedDeleteItems.length !== 0);
  }, [data, faqs, selectedDeleteItems]);
  return (
    <>
      <ActionContainer $visible={isChanged}>
        <FlexContainer
          $justify="space-between"
          $width="normal"
          $flexDirection="row"
          style={{ alignItems: "center" }}
        >
          <ActionBarText className="body-3">
            Hãy kiểm tra kỹ các thay đổi trước khi lưu lại.
          </ActionBarText>
          {isUpdating ? (
            <ButtonWrapper $maxWidth={true} $variant="shadow" disabled={true}>
              <Row $align="center" $justify="center">
                <Loader />
                <p className="body-3">Đang lưu</p>
              </Row>
            </ButtonWrapper>
          ) : (
            <CustomButton
              $bgColor="#fff"
              $border="2px solid rgba(22, 31, 57, 0.8)"
              $width="fit"
              $hoverBgColor="#ffffffeb"
              $hoverBorder="2px solid #f1dbc4"
              onClick={() => handleUpdateFAQ()}
            >
              <p className="body-2">Lưu thay đổi</p>
            </CustomButton>
          )}
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
