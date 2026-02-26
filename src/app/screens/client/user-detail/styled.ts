import styled from "styled-components";
import { fadeInUp } from "@/styles/animations";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  gap: 40px;
  margin: 40px 0px;
  padding: 0px 24px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

