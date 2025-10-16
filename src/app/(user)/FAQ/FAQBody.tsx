"use client";
import {
  Divider,
  FaqCard,
  FAQWrapper,
  QuestionBlock,
  QuestionRow,
} from "@/components/Main/Styled/FAQContent.styles";
import React, { useState } from "react";
import { FAQProps } from "./page";
import { H0, H3 } from "@/components/Typography/Heading.styles";
import { Body2 } from "@/components/Typography/Body.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import {
  Container,
  Dot,
  Line,
  LineContainer,
  VectorContainer,
} from "@/components/PostCard/PostCard.styles";
import Vector from "@/assets/svg/vector";

// Component

const FAQBody = ({ ...faq }: FAQProps) => {
  const [selected, setSelected] = useState(0);
  if (!faq) return null;
  return (
    <FAQWrapper>
      <H0>Câu hỏi thường gặp</H0>
      <FlexContainer $flexDirection="row" $justify="center" $gap={6}>
        <Container $flex={3}>
          <LineContainer>
            <Line></Line>
            <VectorContainer $left={false}>
              <Vector />
            </VectorContainer>
          </LineContainer>
          <Dot></Dot>
        </Container>
        {/* Dot */}
        {Array.from({ length: 9 }).map((_, index) => (
          <Dot key={index} />
        ))}
        <Container $flex={3}>
          <Dot></Dot>
          <LineContainer>
            <VectorContainer $left={true}>
              <Vector />
            </VectorContainer>
            <Line></Line>
          </LineContainer>
        </Container>
      </FlexContainer>
      <FaqCard>
        {faq.questionAnswer.map((item, index) => (
          <QuestionBlock key={index}>
            <QuestionRow>
              <H3 $color={selected === index ? "#EA8E31" : "#000"}>
                {item.question}
              </H3>
              <button
                className="cursor-pointer"
                onClick={() => setSelected(index)}
              >
                <H3>{selected === index ? "-" : "+"}</H3>
              </button>
            </QuestionRow>
            <Body2 className={`${selected === index ? "flex" : "hidden"}`}>
              {item.answer}
            </Body2>
            <Divider />
          </QuestionBlock>
        ))}
      </FaqCard>
    </FAQWrapper>
  );
};

export default FAQBody;
