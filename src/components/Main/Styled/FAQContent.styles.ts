"use client"
import styled from "styled-components";


export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 12rem;
    gap: 5rem;
    margin-top: 0;
  }
`;

export const FaqCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 40px;
  padding: 2.5rem 2.5rem;
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


export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: black;
`;