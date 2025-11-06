import styled, { keyframes } from "styled-components";

export const TabsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;

export const DateDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

// Side bar
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px)
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SidebarContainer = styled.div`
  display: none;
  flex-direction: column;
  width: fit-content;
  min-width: 80px;
  max-width: 217px;
  height: calc(100vh - 64px);
  padding: 24px 16px;
  background-color: #fff;
  border-right: 1.5px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  background-color: transparent;
  gap: 24px;

  @media (min-width: 1024px) {
    min-width: 250px;
  }

  @media (min-width: 425px) {
    display: flex;
  }
`;

export const SidebarItemsContainer = styled.div<{
  $gap?: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 48px;
  height: auto;
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : "24px")};
  animation: ${fadeIn} 1s ease forwards;

  .basic-info {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
    }
  }

  div p {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;

export const InfoContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }
`;
