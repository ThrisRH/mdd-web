import styled, { keyframes } from "styled-components";

// Header bar
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 64px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0.2px rgba(0, 0, 0, 0.5);
  align-items: center;
  padding: 0px 24px;
  justify-content: space-between;
  z-index: 100;

  .SearchArea {
    width: 50%;

    @media (min-width: 425px) {
      width: 40%;
    }
  }
`;

export const HeaderItemsGroup = styled.div<{ $width?: string }>`
  display: flex;
  width: ${(props) => props.$width || "auto"};
  flex-direction: row;
  align-items: center;
  gap: 12px;

  .expand-tab-bar {
    display: none;

    @media (max-width: 424px) {
      display: flex;
      gap: 24px;
    }
  }

  a {
    display: none;

    @media (min-width: 425px) {
      display: block;
    }
  }

  .logoText {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const ActionWrapper = styled.div`
  position: relative;
`;

export const CreateBlogButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  background-color: white;
  border: solid 1px rgba(35, 50, 56, 0.2);
  border-radius: 24px;
  padding: 4px;
  height: auto;
  cursor: pointer;

  p {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    padding: 2px 16px;
  }

  &:hover {
    background-color: rgba(35, 50, 56, 0.1);
  }

  &:active {
    background-color: rgba(35, 50, 56, 0.3);
  }
`;

export const DropdownCreateContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  min-width: 100px;
  width: max-content;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;

// Main layout
export const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .BottomNavbar {
    display: flex;

    @media (min-width: 424px) {
      display: none;
    }
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  min-height: calc(100vh - 64px);
  overflow-y: auto;
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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  height: fit-content;
  width: 100%;
  background: white;
  padding: 32px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
`;

// Pagination
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
`;

export const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: ${({ $active }) => ($active ? "#0f62fe" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#0353e9" : "#f0f0f0")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
