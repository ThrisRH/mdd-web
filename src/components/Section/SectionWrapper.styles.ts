"use client"
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    gap: 50px;
`

export const SectionBody = styled.div<{$flexDirection?: string, $gap?: number}>`
    display: flex; 
    flex-direction: ${props => props.$flexDirection || "column"};
    gap: ${props => props.$gap || 16}px;
    width: 100%;
`

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem; /* gap-4 = 16px */
  flex: 1;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* sm:grid-cols-2 */
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* lg:grid-cols-3 */
  }
`;