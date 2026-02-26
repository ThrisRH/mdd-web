import styled from "styled-components";
import { slideUp } from "@/styles/animations";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  background-color: #f4f4f4;
  animation: ${slideUp} 0.5s ease-out reverse;
`;

export const FooterText = styled.p`
  font-size: 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #EA8E31;
  }
`;

