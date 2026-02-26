"use client";
import { Column } from "@/styles/common";
import styled from "styled-components";
import { fadeInUp } from "@/styles/animations";

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 40px;
  margin-top: 40px;
  padding: 16px;
  animation: ${fadeInUp} 0.6s ease-out;

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
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;

  &:hover {
    background-color: rgba(241, 219, 196, 0.5);
    transform: translateY(-4px);
  }
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
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #EA8E31;
  }
`;

export const AnswerContent = styled.p<{ $hidden?: boolean }>`
  display: ${({ $hidden }) => ($hidden ? "none" : "block")};
  animation: ${fadeInUp} 0.3s ease-out;
`;

export const Divider = styled.div<{ $color?: string }>`
  width: 100%;
  height: 1px;
  background: ${(props) => props.$color || "black"};
  transition: background 0.3s ease;
`;

