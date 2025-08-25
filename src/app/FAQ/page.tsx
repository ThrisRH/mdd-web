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
import { Body2, Body3 } from "@/components/Typography/Body.styles";
import { H0, H3 } from "@/components/Typography/Heading.styles";
import React, { useEffect, useState } from "react";

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
    <div className="p-4 md:p-48 flex flex-col items-center justify-center gap-10 md:gap-20 mt-10 md:mt-0">
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
      <div
        className="relative flex flex-col w-full h-fit rounded-[40px] py-10 px-10 items-center gap-6"
        style={{ backgroundColor: "rgba(241, 219, 196, 0.3)" }}
      >
        {faq.questionAnswer.map((item, index) => (
          <div className="w-full flex flex-col gap-4" key={index}>
            <div className="flex flex-row justify-between">
              <H3 $color={selected === index ? "#EA8E31" : "#000"}>
                {item.question}
              </H3>
              <button
                className="cursor-pointer"
                onClick={() => setSelected(index)}
              >
                <H3>{selected === index ? "-" : "+"}</H3>
              </button>
            </div>
            <Body2 className={`${selected === index ? "flex" : "hidden"}`}>
              {item.answer}
            </Body2>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
