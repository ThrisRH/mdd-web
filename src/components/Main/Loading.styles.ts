import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height:80vh;
`;

export const Dot = styled.div<{ $delay?: string }>`
  width: 28px;
  height: 28px;
  background-color: #F1DBC4;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;