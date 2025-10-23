import React from "react";
import { ContentSideContainer, IconContainer } from "../styles/Page.styles";
import {
  BorderContainer,
  FlexContainer,
} from "@/styles/components/layout/Common.styles";

import DeleteIC from "@/assets/svg/Interact/RecycleBin";
import DropdownIC from "@/assets/svg/arrowdown";
import BlogContentInput from "../Blogs/CreateInputs/BlogContentInput";
import { Body } from "@/components/Typography/Body.styles";
import { CustomButton } from "@/components/ui/button/styled";
import { FAQ } from "@/types/faq";

interface Props {
  data: FAQ;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  selectedDeleteItems: number[];
  toggleSelect: (id: number) => void;
  setData: React.Dispatch<React.SetStateAction<FAQ>>;
  addNewFaq: () => void;
}

const FAQsSection = ({
  data,
  setData,
  selectedDeleteItems,
  selected,
  setSelected,
  toggleSelect,
  addNewFaq,
}: Props) => {
  return (
    <ContentSideContainer>
      {data.questionAnswer.map((item, index) => (
        <BorderContainer
          key={index}
          $bgColor={
            selectedDeleteItems.includes(item.id) ? "#eda3a3a2" : "transparent"
          }
        >
          <FlexContainer $flexDirection="row" style={{ cursor: "pointer" }}>
            <FlexContainer $flexDirection="row">
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
                <Body $variant="body2">{item.question}</Body>
              </FlexContainer>
            </FlexContainer>

            <IconContainer onClick={() => toggleSelect(item.id)}>
              <DeleteIC scale={20} stroke="#233238" />
            </IconContainer>
          </FlexContainer>
          {selected === index && (
            <FlexContainer $flexDirection="row">
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

      <CustomButton
        $bgColor="transparent"
        $border="1px solid rgba(0,0,0,0.2)"
        onClick={addNewFaq}
      >
        Thêm câu hỏi đáp mới
      </CustomButton>
    </ContentSideContainer>
  );
};

export default FAQsSection;
