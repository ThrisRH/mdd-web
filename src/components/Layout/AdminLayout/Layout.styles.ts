import styled, { keyframes } from "styled-components";

// Header bar
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 240px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0.2px rgba(0, 0, 0, 0.5);
  align-items: center;
  padding: 0px 24px;
  justify-content: space-between;
  z-index: 100;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const ActionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const CreateBlogButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  background-color: white;
  border: solid 1px rgba(35, 50, 56, 0.2);
  border-radius: 24px;
  padding: 2px 16px;
  height: auto;
  cursor: pointer;

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
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;

// Main layout
export const AdminLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  min-height: calc(100vh - 64px);
  overflow: hidden;
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

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: calc(100vh - 64px);
  padding: 24px 16px;
  background-color: #fff;
  border-right: 1.5px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  background-color: transparent;
  gap: 24px;
`;

export const SidebarItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 24px;
  animation: ${fadeIn} 1s ease forwards;
`;

export const TabContainer = styled.div<{
  $isSelected: boolean;
  $padding?: string;
  $gap?: number;
}>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.$isSelected ? "rgba(0,0,0,0.03)" : "none"};
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : "32px")};
  width: 100%;
  height: 48px;
  padding: ${(props) => (props.$padding ? props.$padding : " 4px 24px")};
  align-items: center;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #0000000d;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

//  Body layout
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

export const TitleContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  padding: 32px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
`;

// Pagination
export const PaginationWrapper = styled.div`
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
