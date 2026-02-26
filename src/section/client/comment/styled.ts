import styled from "styled-components";
import { fadeInUp } from "@/styles/animations";

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px #d5cbcb solid;
  height: fit-content;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #EA8E31;
    box-shadow: 0 4px 12px rgba(234, 142, 49, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 12px;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: gray;
  }

  &:focus {
    background-color: rgba(234, 142, 49, 0.02);
  }
`;

export const SubmitField = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  border-top: 1px #d5cbcb solid;
  justify-content: flex-end;
  align-items: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 100%;
  height: 60px;

  border: 1px #000 solid;
  color: #000;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    background-color: #000;
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 40rem) {
    width: 208px;
  }
`;

export const Content = styled.p`
  font-size: 20px;
`;

// User comment card

export const CommentCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  animation: ${fadeInUp} 0.6s ease-out;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(4px);
  }
`;

export const CommentImageWrapper = styled.div`
  min-width: 60px;
  height: 60px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-style: 16px;
`;

