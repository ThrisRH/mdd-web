"use client";
import { Column } from "@/styles/common";
import styled from "styled-components";

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 40px;
  margin-top: 40px;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 40px;
    gap: 5rem;
    margin-top: 0;
  }
`;

export const FAQContainer = styled(Column)`
  gap: 40px;
  max-width: 988px;
`;

export const FaqCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 40px;
  padding: 2.5rem;
  align-items: center;
  gap: 1.5rem;
  background-color: rgba(241, 219, 196, 0.3);
`;

export const QuestionBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QuestionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AnswerContent = styled.p<{ $hidden?: boolean }>`
  display: ${({ $hidden }) => ($hidden ? "none" : "false")};
`;

export const Divider = styled.div<{ $color?: string }>`
  width: 100%;
  height: 1px;
  background: ${(props) => props.$color || "black"};
`;
