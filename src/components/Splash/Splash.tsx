"use client";
import styled, { keyframes, css } from "styled-components";
import Cactus from "@/assets/svg/loadingCactus";

const windAnimation = keyframes`
  0% {
    transform: translateX(2000%) scale(0.8);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(0%) scale(1.2);
    opacity: 1;
  }
`;

const SplashWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
`;

const Wind = styled.div<{
  delay: number;
  top: string;
  type: "line" | "circle";
  size?: string;
  duration?: string;
}>`
  position: fixed;

  top: ${({ top }) => top};
  left: 0;
  animation: ${windAnimation} ${({ duration }) => duration || "3s"} linear
    infinite;
  animation-delay: ${({ delay }) => delay}s;

  ${({ type, size }) =>
    type === "line"
      ? css`
          width: ${size || "120px"};
          height: 6px;
          background: #eeead8;
          border-radius: 3px;
        `
      : css`
          width: ${size || "20px"};
          height: ${size || "20px"};
          background: #EEEAD8
          border-radius: 50%;
        `}
`;

export default function Splash() {
  return (
    <SplashWrapper>
      <Cactus />

      {/* Wind lines */}
      <Wind type="line" top="30%" delay={0} />
      <Wind type="line" top="50%" delay={0} duration="1.5s" size="100px" />
      <Wind type="line" top="70%" delay={0} duration="1.5s" size="80px" />

      {/* Wind circles */}
      <Wind type="circle" top="40%" delay={0} duration="1.5s" />
      <Wind type="circle" top="60%" delay={0} size="25px" duration="1.5s" />
    </SplashWrapper>
  );
}
