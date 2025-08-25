import styled from "styled-components";

export const Container = styled.div<{$isNavbar?: boolean;}>`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  background-color: transparent;
  padding: 0px 16px;
  gap: 16px;
  
  flex-direction: ${({ $isNavbar }) => (!$isNavbar ? "column" : "row")};
  justify-content: ${({ $isNavbar }) => (!$isNavbar ? "center" : "start")};
`;

export const Field = styled.div<{$isNavbar?: boolean; $gap?: number}>`
    display: flex;
    justify-content: ${({ $isNavbar }) => (!$isNavbar ? "center" : "start")};
    flex-direction: row;
    gap: ${props => props.$gap || 6}px;

    @media (min-width: 40rem) {
    justify-content: center;
    }
`