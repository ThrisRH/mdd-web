"use client";
import {
  Divider,
  FaqCard,
  QuestionBlock,
  QuestionRow,
} from "@/components/Main/Styled/FAQContent.styles";
import React, { useState } from "react";
import { FAQProps } from "./page";
import { H3 } from "@/components/Typography/Heading.styles";
import { Body2 } from "@/components/Typography/Body.styles";

const FAQBody = ({ ...faq }: FAQProps) => {
  const [selected, setSelected] = useState(0);
  if (!faq) return null;
  return (
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
  );
};

export default FAQBody;
