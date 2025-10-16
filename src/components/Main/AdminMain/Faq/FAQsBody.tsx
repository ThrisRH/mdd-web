"use client";
import { FAQProps } from "@/app/(user)/FAQ/page";
import { CustomBody } from "@/components/Typography/Body.styles";
import {
  BorderContainer,
  FlexContainer,
} from "@/styles/components/layout/Common.styles";
import React, { useState } from "react";

import DeleteIC from "@/assets/svg/Interact/RecycleBin";
import DropdownIC from "@/assets/svg/arrowdown";
import BlogTitleInput from "../Blogs/CreateInputs/BlogTitleInput";
import BlogContentInput from "../Blogs/CreateInputs/BlogContentInput";
import {
  CustomButton,
  MainButtonContainer,
} from "@/styles/components/buttons/Button.styles";
import { Loader } from "../../Loading.styles";
import { useRouter } from "next/navigation";
import {
  BodyContainer,
  ContentsGroup,
  IconContainer,
} from "../styles/Page.styles";

interface Props {
  Faqs: FAQProps;
}

const FAQsBody = ({ Faqs }: Props) => {
  const [data, setData] = useState(Faqs);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDeleteItems, setSelectedDeleteItems] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

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
  const toggleSelect = (id: number) => {
    setSelectedDeleteItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
    <BodyContainer $isPadding={true}>
      {/* Danh sách các FAQs */}
      <ContentsGroup $variant="information">
        {data.questionAnswer.map((item, index) => (
          <BorderContainer
            $canSelection={true}
            key={index}
            $bgColor={
              selectedDeleteItems.includes(item.id)
                ? "#eda3a3a2"
                : "transparent"
            }
          >
            <FlexContainer $flexDirection="row" style={{ cursor: "pointer" }}>
              <FlexContainer $flexDirection="row" $gap={12}>
                <IconContainer $haveBg={true}>
                  <FlexContainer
                    onClick={() => {
                      if (selected === index) {
                        setSelected(null);
                      } else {
                        setSelected(index);
                      }
                    }}
                    style={{
                      transform: `${
                        selected === index ? "rotate(180deg)" : "rotate(0deg)"
                      }`,
                    }}
                  >
                    <DropdownIC fill="#233238" />
                  </FlexContainer>
                </IconContainer>
                <FlexContainer style={{ justifyContent: "center" }}>
                  <CustomBody>{item.question}</CustomBody>
                </FlexContainer>
              </FlexContainer>

              <IconContainer onClick={() => toggleSelect(item.id)}>
                <DeleteIC scale={20} stroke="#233238" />
              </IconContainer>
            </FlexContainer>
            {selected === index && (
              <FlexContainer $flexDirection="row" $gap={12}>
                <BlogContentInput
                  label="Câu hỏi"
                  value={item.question}
                  maxLength={1000}
                  onChange={(value: string) => {
                    setData((prev) => ({
                      ...prev,
                      questionAnswer: prev.questionAnswer.map((q, i) =>
                        i === index ? { ...q, question: value } : q
                      ),
                    }));
                  }}
                />
                <BlogContentInput
                  canOverflow={true}
                  maxHeight={200}
                  label="Câu trả lời"
                  value={item.answer}
                  maxLength={1000}
                  onChange={(value: string) => {
                    setData((prev) => ({
                      ...prev,
                      questionAnswer: prev.questionAnswer.map((q, i) =>
                        i === index ? { ...q, answer: value } : q
                      ),
                    }));
                  }}
                />
              </FlexContainer>
            )}
          </BorderContainer>
        ))}
      </ContentsGroup>

      {/* Vùng chứa bảng action */}
      <ContentsGroup $variant="action">
        <BorderContainer $gap={24}>
          <FlexContainer $gap={4}>
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

        {/* Bảng action */}
        <BorderContainer $gap={24}>
          <FlexContainer $gap={4}>
            <CustomBody $weight={600} $size={16}>
              Thêm FAQ mới
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
              onClick={() => addFAQ()}
              $isDisable={isLoading}
            >
              Thêm mới
            </MainButtonContainer>
          )}
        </BorderContainer>
      </ContentsGroup>
    </BodyContainer>
  );
};

export default FAQsBody;
