import Vector from "@/assets/svg/vector";
import {
  Container,
  Dot,
  Line,
  LineContainer,
  TimeArea,
  VectorContainer,
} from "@/components/PostCard/PostCard.styles";
import { H0 } from "@/components/Typography/Heading.styles";
import React from "react";
import { FAQWrapper } from "@/components/Main/Styled/FAQContent.styles";
import FAQBody from "./FAQBody";

export interface FAQProps {
  questionAnswer: QuestAnswer[];
}

interface QuestAnswer {
  question: string;
  answer: string;
}

async function getFAQData() {
  try {
    const res = await fetch("http://localhost:1337/api/faq?populate=*", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch FAQ data");
  }
}

export default async function FAQ() {
  const data = await getFAQData();
  const faq: FAQProps = data.data;

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
      </TimeArea>
      <FAQBody questionAnswer={faq.questionAnswer} />
    </FAQWrapper>
  );
}
