"use client";
import Vector from "@/assets/svg/vector";
import ArrowDrop from "@/assets/svg/arrowdown";
import {
  Container,
  Dot,
  Line,
  LineContainer,
  TimeArea,
  VectorContainer,
} from "@/components/PostCard/PostCard.styles";
import { Body2 } from "@/components/Typography/Body.styles";
import { H0, H3 } from "@/components/Typography/Heading.styles";
import React, { useEffect, useState } from "react";
import {
  Divider,
  FaqCard,
  FAQWrapper,
  QuestionBlock,
  QuestionRow,
} from "@/components/Main/Styled/FAQContent.styles";

interface FQAProps {
  questionAnswer: QuestAnswer[];
}

interface QuestAnswer {
  question: string;
  answer: string;
}

const page = () => {
  const [faq, setFAQ] = useState<FQAProps | null>(null);
  const [selected, setSelected] = useState<number>(0);

  const handleGetFAQ = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/faq?populate=*", {
        method: "GET",
      });
      const data = await response.json();
      setFAQ(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetFAQ();
  }, []);

  if (!faq) return null;
  return (
    <FAQWrapper>
      <H0>Câu hỏi thường gặp</H0>
      <TimeArea>
        <Container $flex={3}>
          <LineContainer>
            <Line></Line>
            <VectorContainer $left={false}>
              <Vector />
            </VectorContainer>
          </LineContainer>
          <Dot></Dot>
        </Container>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
        <Container $flex={3}>
          <Dot></Dot>
          <LineContainer>
            <VectorContainer $left={true}>
              <Vector />
            </VectorContainer>
            <Line></Line>
          </LineContainer>
        </Container>
      </TimeArea>
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

export default page;
