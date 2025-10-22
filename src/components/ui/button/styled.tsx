import styled from "styled-components";

// Button chính 2 màu primary và secondary
export const ButtonWrapper = styled.button<{
  $variant: "primary" | "secondary" | "outline" | "shadow";
  $maxWidth?: boolean;
  $isDisable?: boolean;
}>`
  width: 100%;
  max-width: ${(props) => (props.$maxWidth ? "150px" : "none")};
  height: 48px;
  border-radius: 8px;
  cursor: ${(props) => (props.$isDisable ? "not-allowed" : "pointer")};
  transition: all 0.1s ease-in-out;

  ${({ $variant, $isDisable }) => {
    if ($isDisable) {
      return `
      background-color: #CBCBCB;
        color: white;
        border: none;
      `;
    }

    switch ($variant) {
      case "primary":
        return `
          background-color: #EA8E31;
          border: none;
          &:hover {
            background-color: #d67c22;
          }
        `;
      case "secondary":
        return `
          background-color: #F1DBC4;
          border: none;
          &:hover {
            background-color: #E9C7A5;
          }
        `;
      case "shadow":
        return `
          background-color: white;
          color: black;
          box-shadow: 1px 1px 10px 10px rgba(0,0,0,0.1)
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
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
  height: 40px;
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
