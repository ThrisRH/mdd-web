"use client";
import styled from "styled-components";

export const Flex = styled.div<{
  $gap?: "none" | "xs" | "sm" | "md" | "lg";
  $align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $width?: string;
  $justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}>`
  display: flex;
  width: ${(props) => props.$width || "100%"};
  gap: ${(props) => {
    switch (props.$gap) {
      case "none":
        return "0px";
      case "xs":
        return "4px";
      case "sm":
        return "12px";
      case "md":
        return "24px";
      case "lg":
        return "32px";
      default:
        return "12px";
    }
  }};
  align-items: ${(props) => props.$align || "flex-start"};
  justify-content: ${(props) => props.$justify || "flex-start"};
`;

export const Row = styled(Flex)<{ $padding?: string }>`
  padding: ${(props) => props.$padding || "0px"};
  flex-direction: row;
`;
export const Column = styled(Flex)<{ $padding?: string }>`
  padding: ${(props) => props.$padding || "0px"};
  flex-direction: column;
`;

//  For Main layout * Blog list side *
export const BlogContainer = styled(Column)`
  align-items: center;
  flex: 2;
  gap: 40px;

  @media (min-width: 48rem) {
    gap: 50px;
  }
`;
