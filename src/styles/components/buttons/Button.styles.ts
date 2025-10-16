import styled from "styled-components";

// Button chính 2 màu primary và secondary
export const MainButtonContainer = styled.button<{
  $variant: "primary" | "secondary";
  $isDisable?: boolean;
}>`
  width: 100%;
  height: 48px;
  background-color: ${(props) =>
    props.$isDisable
      ? "#CBCBCB !important"
      : props.$variant === "primary"
      ? "#EA8E31"
      : "#F1DBC4"};
  border-radius: 8px;
  padding: 10px;
  cursor: ${(props) => (props.$isDisable ? "not-allowed" : "pointer")};

  transition: all 0.1s ease-in-out;
  ${({ $isDisable = false }) =>
    !$isDisable &&
    `
    &:hover {
      background-color: #f1dbc49a;
  `};
`;

// Button tùy chỉnh
export const CustomButton = styled.button<{
  $width?: string;
  $bgColor?: string;
  $isDisable?: boolean;
  $border?: string;
  $hoverBgColor?: string;
  $hoverBorder?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.$border ? props.$border : "none")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: 48px;
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#000")};
  border-radius: 8px;
  padding: 12px;
  cursor: ${(props) => (props.$isDisable ? "not-allowed" : "pointer")};
  gap: 16px;

  ${({ $isDisable = false, $hoverBgColor, $hoverBorder }) =>
    !$isDisable &&
    `
    &:hover {
      background-color: ${$hoverBgColor || "#f1dbc49a"};
      border: ${$hoverBorder || "none"}
    }
  `}
`;
