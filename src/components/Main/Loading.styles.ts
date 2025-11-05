import styled, { keyframes } from "styled-components";

// MDD Main loader

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
  height: 80vh;
`;

export const Dot = styled.div<{ $delay?: string }>`
  width: 28px;
  height: 28px;
  background-color: #f1dbc4;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;

// Dot Loader Small
const l11 = keyframes`
  25% {background-position:100% 0   ,0 100%,100% 100%;}
  50% {background-position:100% 0   ,0 0   ,100% 100%;}
  75% {background-position:100% 0   ,0 0   ,0    100%;}
  100%{background-position:100% 100%,0 0   ,0    100%;}
`;

export const Loader = styled.div`
  width: 24px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background:
    var(--_g) 0 0,
    var(--_g) 0 100%,
    var(--_g) 100% 100%;
  background-size: 40% 40%;
  animation: ${l11} 1s infinite linear;
`;
