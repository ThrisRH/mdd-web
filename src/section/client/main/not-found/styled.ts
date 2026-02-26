import { Column } from "@/styles/common";
import styled from "styled-components";
import { fadeInUp } from "@/styles/animations";

export const Wrapper = styled(Column)`
  gap: 32px;
  margin: 80px 0;
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const ContentContainer = styled(Column)`
  gap: 16px;
`;

export const NotFoundContent = styled.p`
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    color: #EA8E31;
  }
`;

