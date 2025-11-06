import styled from "styled-components";
import { theme } from "./theme";

type TextCanChangeColorProps = {
  $isActive?: boolean;
  $defaultColor?: "header" | "body";
};

export const TextCanChangeColor = styled.h5<TextCanChangeColorProps>`
  color: ${({ $isActive = false, $defaultColor = "body" }) =>
    $isActive
      ? theme.colors.primary500
      : $defaultColor === "header"
        ? "#fff"
        : "#000"};
`;
