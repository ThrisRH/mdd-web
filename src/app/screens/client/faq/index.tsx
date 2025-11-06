"use client";

import React, { useState } from "react";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import {
  Container,
  Dot,
  Line,
  LineContainer,
  VectorContainer,
} from "@/section/client/blogs/blogcard/styled";
import Vector from "@/assets/svg/vector";
import { FAQData } from "@/types/faq";
import { Text } from "@/styles/theme/typography";
import {
  Divider,
  FaqCard,
  FAQWrapper,
  QuestionBlock,
  QuestionRow,
} from "./styled";

// Component

const FAQBody = ({ ...faq }: FAQData) => {
  const [selected, setSelected] = useState(0);
  if (!faq) return null;
  return (
    <FAQWrapper>
      <Text $variant="h0">Câu hỏi thường gặp</Text>
      <FlexContainer $flexDirection="row" $justify="center" $gap="xs">
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
            <QuestionRow
              className="cursor-pointer"
              onClick={() => setSelected(index)}
            >
              <Text
                $variant="h3"
                $color={selected === index ? "#EA8E31" : "#000"}
              >
                {item.question}
              </Text>
              <Text $variant="h3">{selected === index ? "-" : "+"}</Text>
            </QuestionRow>
            <Text
              $variant="body2"
              className={`${selected === index ? "flex" : "hidden"}`}
            >
              {item.answer}
            </Text>
            <Divider />
          </QuestionBlock>
        ))}
      </FaqCard>
    </FAQWrapper>
  );
};

export default FAQBody;
