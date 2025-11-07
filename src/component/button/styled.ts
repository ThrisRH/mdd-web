import { theme } from "@/styles/theme";
import styled from "styled-components";

// Button chính 2 màu primary và secondary
export const ButtonWrapper = styled.button<{
  $variant: "primary" | "secondary" | "outline" | "shadow";
  $maxWidth?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;

  max-width: ${(props) => (props.$maxWidth ? "150px" : "none")};
  height: 48px;
  width: 100%;
  padding: 0px 12px;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:disabled {
    background-color: #cbcbcb;
    color: white;
    border: none;
    cursor: not-allowed;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return `
          background-color: ${theme.colors.primary400};
          border: none;
          &:hover {
            background-color: ${theme.colors.primary500};
          }
        `;
      case "secondary":
        return `
          background-color: ${theme.colors.secondary400};
          border: none;
          &:hover {
            background-color: ${theme.colors.secondary500};
          }
        `;
      case "shadow":
        return `
          background-color: white;
          color: black;
          &:hover {
            background-color: rgba(255, 255, 255, 0.9);
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: black;
          border: 1px solid rgba(0,0,0,0.2);
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        `;
    }
  }}
`;

// Button tùy chỉnh
export const CustomButton = styled.button<{
  $width?: string;
  $bgColor?: string;
  $border?: string;
  $hoverBgColor?: string;
  $hoverBorder?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.$border ? props.$border : "none")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: 40px;
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#000")};
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  gap: 16px;

  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.grey500};
  }

  &:hover {
    background-color: ${(props) => props.$hoverBgColor};
  }

  @media (min-width: 768px) {
    height: 48px;
  }

  svg {
    display: block;
    @media (min-width: 425px) {
      display: none;
    }
  }

  p {
    display: none;
    @media (min-width: 425px) {
      display: block;
    }
  }
`;
