import styled from "styled-components";

export const FlexContainer = styled.div<{
  $flexDirection?: "row" | "column";
  $align?: string;
  $justify?: string;
  $gap?: string | number;
  $flex?: number;
  $width?: string;
  $margin?: string;
  $padding?: string;
  $bgColor?: string;
  $radius?: number;
}>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "column"};
  align-items: ${(props) => props.$align || "stretch"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : "0px")};
  flex: ${(props) => props.$flex || "unset"};
  width: ${(props) => props.$width || "auto"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  background-color: ${(props) =>
    props.$bgColor ? props.$bgColor : "transparent"};
  border-radius: ${(props) => (props.$radius ? `${props.$radius}px` : "0px")};
`;
