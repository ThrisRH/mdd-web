"use client";
import styled from "styled-components";

export const FlexContainer = styled.div<{
  $width?: "fit" | "normal";
  $flexDirection?: "row" | "column";
  $gap?: "none" | "xs" | "sm" | "md";
  $justify?: string;
}>`
  display: flex;
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
      default:
        return "12px";
    }
  }};
  width: ${(props) => (props.$width === "fit" ? "fit-content" : "100%")};
  flex-direction: ${(props) => props.$flexDirection || "column"};
  justify-content: ${(props) => props.$justify || "flex-start"};

  transition: all 0.2s ease-in-out;
`;

export const FormContainer = styled(FlexContainer)`
  width: 900px;
  max-width: 900px;

  height: fit-content;
  max-height: 100%;
  background-color: white;
  border-radius: 24px;
`;

export const BorderContainer = styled(FlexContainer)<{ $bgColor?: string }>`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: ${(props) => props.$bgColor || "transparent"};
  padding: 12px;
  align-items: center;
`;

export const ImageInAdminContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media (min-width: 500px) {
    width: 128px;
    height: 128px;
  }
`;
