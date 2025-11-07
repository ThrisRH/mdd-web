import styled from "styled-components";
import { theme } from "./theme";

type TextCanChangeColorProps = {
  $isActive?: boolean;
  $defaultColor?: "header" | "body";
  $align?: "center" | "start" | "end";
};

export const HeadTextCanChangeColor = styled.h5<TextCanChangeColorProps>`
  color: ${({ $isActive = false, $defaultColor = "body" }) =>
    $isActive
      ? theme.colors.primary500
      : $defaultColor === "header"
        ? "#fff"
        : "#000"};

  &:hover {
    color: ${theme.colors.primary500};
  }
`;

export const TextCanChangeColor = styled.p<TextCanChangeColorProps>`
  color: ${({ $isActive = false, $defaultColor = "body" }) =>
    $isActive
      ? theme.colors.primary500
      : $defaultColor === "header"
        ? "#fff"
        : "#000"};
  text-align: ${({ $align = "start" }) => $align};
  &:hover {
    color: ${theme.colors.primary500};
  }
`;

// Admin
export const ActionBarText = styled.p`
  color: ${theme.colors.white500};
`;

export const TitleBlogNoWrap = styled.p`
  white-space: nowrap;
  text-align: start;
`;

export const WhiteText = styled.p`
  color: #fff;
`;

// Common
export const ErrorText = styled.p`
  color: ${theme.colors.error} !important;
`;
