import styled from "styled-components";

// User Layout
export const MainContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-items: start;
  min-height: 100vh;
  padding: 32px 32px 80px 32px;
  gap: 64px;

  @media (min-width: 40rem) {
    padding: 80px;
  }
`;

// Admin Body layout
export const MainContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c5c5c5 #f1f1f1;
`;

// Container của tab trên navbar
export const TabContainer = styled.div<{
  $scale?: string;
  $isSelected: boolean;
}>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.$isSelected ? "rgba(0,0,0,0.03)" : "transparent"};
  gap: 24px;
  width: ${(props) => props.$scale || "100%"};
  height: ${(props) => props.$scale || "48px"};
  padding: 4px 12px;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #0000000d;
  }
`;
