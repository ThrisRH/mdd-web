import styled from "styled-components";
import { slideDown } from "@/styles/animations";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  animation: ${slideDown} 0.5s ease-out;

  @media (min-width: 48rem) {
    height: 300px;
  }
`;
export const Logo = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }

  @media (min-width: 40rem) {
    width: 174px;
    height: 174px;
  }
`;
