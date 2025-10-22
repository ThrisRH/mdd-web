import styled from "styled-components";

export const Flex = styled.div<{
  $gap?: "none" | "xs" | "sm" | "md" | "lg";
  $align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}>`
  display: flex;
  width: 100%;
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

export const Row = styled(Flex)`
  flex-direction: row;
`;
export const Column = styled(Flex)`
  flex-direction: column;
`;
