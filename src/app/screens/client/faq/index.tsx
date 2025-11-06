"use client";

import React, { useState } from "react";
import {
  Container,
  Dot,
  Line,
  LineContainer,
  VectorContainer,
} from "@/section/client/blogs/blogcard/styled";
import Vector from "@/assets/svg/vector";
import { FAQData } from "@/types/faq";
import {
  AnswerContent,
  Divider,
  FaqCard,
  FAQContainer,
  FAQWrapper,
  QuestionBlock,
  QuestionRow,
} from "./styled";
import { TextCanChangeColor } from "@/styles/typography";
import { Row } from "@/styles/common";

// Component

const FAQBody = ({ ...faq }: FAQData) => {
  const [selected, setSelected] = useState(0);
  if (!faq) return null;
  return (
    <FAQWrapper>
      <FAQContainer $align="center">
        <div className="h0">Câu hỏi thường gặp</div>
        <Row $align="center" $justify="center" style={{ gap: "6px" }}>
          <Container $flex={3}>
            <LineContainer>
              <Line $left={false} />
              <VectorContainer $left={false}>
                <Vector />
              </VectorContainer>
            </LineContainer>
          </Container>
          {/* Dot */}
          {Array.from({ length: 10 }).map((_, index) => (
            <Dot key={index} />
          ))}
          <Container $flex={3}>
            <LineContainer>
              <VectorContainer $left={true}>
                <Vector />
              </VectorContainer>
              <Line $left={true} />
            </LineContainer>
          </Container>
        </Row>
        <FaqCard>
          {faq.questionAnswer.map((item, index) => (
            <QuestionBlock key={index}>
              <QuestionRow
                className="cursor-pointer"
                onClick={() => setSelected(index)}
              >
                <TextCanChangeColor as="h3" $isActive={selected === index}>
                  {item.question}
                </TextCanChangeColor>
                <h3>{selected === index ? "-" : "+"}</h3>
              </QuestionRow>
              <AnswerContent className="body-2" $hidden={selected !== index}>
                {item.answer}
              </AnswerContent>
              <Divider />
            </QuestionBlock>
          ))}
        </FaqCard>
      </FAQContainer>
    </FAQWrapper>
  );
};

export default FAQBody;
