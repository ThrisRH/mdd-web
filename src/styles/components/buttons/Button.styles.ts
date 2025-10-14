import styled from "styled-components";

// Button chính 2 màu primary và secondary
export const MainButtonContainer = styled.button<{
  $variant: "primary" | "secondary";
  $height?: string;
  $isDisable?: boolean;
}>`
  width: 100%;
  height: ${(props) => props.$height || "44px"};
  background-color: ${(props) =>
    props.$isDisable
      ? "#CBCBCB !important"
      : props.$variant === "primary"
      ? "#EA8E31"
      : "#F1DBC4"};
  border-radius: 8px;
  padding: 10px;
  cursor: ${(props) => (props.$isDisable ? "not-allowed" : "pointer")};
`;

// Button tùy chỉnh
export const CustomButton = styled.button<{
  $width?: string;
  $bgColor?: string;
  $height?: string;
  $isDisable?: boolean;
  $gap?: number;
  $border?: string;
  $hoverBgColor?: string;
  $hoverBorder?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.$border ? props.$border : "none")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: ${(props) => props.$height || "44px"};
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#000")};
  border-radius: 8px;
  padding: 12px;
  cursor: ${(props) => (props.$isDisable ? "not-allowed" : "pointer")};
  gap: ${(props) => props.$gap || 16}px;

  ${({ $isDisable = false, $hoverBgColor, $hoverBorder }) =>
    !$isDisable &&
    `
    &:hover {
      background-color: ${$hoverBgColor || "#f1dbc49a"};
      border: ${$hoverBorder || "none"}
    }
  `}
`;
