import { theme } from "@/styles/theme";
import styled from "styled-components";

export const NavWrapper = styled.div`
  display: none;

  @media (${theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: black;
  padding: 16px 0;
  align-items: center;
  justify-content: center;
`;

export const HeaderMobileWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #000;

  @media (${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul<{ $isVertical?: boolean }>`
  display: flex;
  flex-direction: ${({ $isVertical }) => ($isVertical ? "column" : "row")};
  align-items: ${({ $isVertical }) => ($isVertical ? "start" : "center")};

  gap: ${({ $isVertical }) => ($isVertical ? "16px" : "63px")};
  width: 100%;
  padding: 0px 16px;
  user-select: none;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 63px;
    display: flex;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  position: relative;
`;

export const Dropdown = styled.div<{ $relative?: boolean }>`
  position: ${({ $relative }) => ($relative ? "relative" : "absolute")};
  gap: 16px;

  ${({ $relative }) =>
    !$relative &&
    `
    top: 50px;
    left: 50%;  
    transform: translateX(-50%);
    width: 200px;
    background-color: black;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    padding: 8px 0;
    border-radius: 16px;
    z-index: 50;
  `}

  color: white;
`;

export const DropdownItem = styled.div<{
  $relative?: boolean;
  $haveBorder?: boolean;
}>`
  padding: ${({ $relative }) => ($relative ? "16px 0px 0px 0px" : "8px 16px")};
  border-bottom: ${({ $haveBorder }) =>
    $haveBorder ? "1px solid rgba(255,255,255,0.2)" : "none"};

  cursor: pointer;

  &:hover {
    color: #ea8e31;
  }
`;

export const NavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 24px;
`;

export const ActionArea = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;
