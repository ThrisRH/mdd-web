import styled from "styled-components";
import { buttonHoverAnimation } from "@/styles/animations";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const PageNumber = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 32px;
  height: 32px;
  background: ${({ $active }) => ($active ? "#F1DBC4" : "transparent")};
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "#F1DBC4" : "rgba(241, 219, 196, 0.3)")};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ArrowButton = styled.button<{ $rotate: number }>`
  transform: rotate(${(props) => props.$rotate}deg);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: rotate(${(props) => props.$rotate}deg) scale(1.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const BlogCardFrame = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 40px;

  @media (min-width: 48rem) {
    gap: 50px;
  }
`;
