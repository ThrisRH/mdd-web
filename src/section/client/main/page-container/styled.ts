import { Row } from "@/styles/common";
import styled from "styled-components";

// User Layout
export const ContentWrapper = styled(Row)`
  justify-content: center;

  min-height: 100vh;
  padding: 32px 32px 80px 32px;

  background-color: white;

  @media (min-width: 40rem) {
    padding: 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 1480px;
  gap: 64px;
`;
