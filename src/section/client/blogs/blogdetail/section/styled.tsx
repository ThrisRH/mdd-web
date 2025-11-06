"use client";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  gap: 50px;
`;

export const SectionWrapper = styled(FlexContainer)`
  flex-direction: column;
  gap: 24px;
`;

export const SectionBody = styled.div<{
  $flexDirection?: string;
  $gap?: number;
}>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "column"};
  gap: ${(props) => props.$gap || 16}px;
  width: 100%;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  flex: 1;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
