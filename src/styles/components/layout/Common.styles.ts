import styled from "styled-components";

export const FormContainer = styled.div<{ $gap?: number }>`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 100%;
  background-color: white;
  border-radius: 24px;

  gap: ${(props) => `${props.$gap}px` || "0px"};
`;

export const FlexContainer = styled.div<{
  $width?: "fit" | "normal";
  $flexDirection?: "row" | "column";
  $justify?: string;
  $gap?: string | number;
  $canSelection?: boolean;
}>`
  display: flex;

  width: ${(props) => (props.$width === "fit" ? "fit-content" : "100%")};
  flex-direction: ${(props) => props.$flexDirection || "column"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : "0px")};

  transition: all 0.2s ease-in-out;
  user-select: ${(props) => (props.$canSelection ? "text" : "none")};
`;

export const BorderContainer = styled(FlexContainer)<{ $bgColor?: string }>`
  gap: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: ${(props) => props.$bgColor || "transparent"};
  padding: 12px;
  align-items: center;
`;
