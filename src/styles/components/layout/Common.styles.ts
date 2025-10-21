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
  $gap?: "none" | "xs" | "sm" | "md";
  $justify?: string;
  $canSelection?: boolean;
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
  user-select: ${(props) => (props.$canSelection ? "text" : "none")};
`;

export const BorderContainer = styled(FlexContainer)<{ $bgColor?: string }>`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: ${(props) => props.$bgColor || "transparent"};
  padding: 12px;
  align-items: center;
`;

export const ContentEditingWrapper = styled(FlexContainer)<{
  $isVisible?: boolean;
}>`
  position: ${({ $isVisible = false }) =>
    $isVisible ? "absolute" : "relative"};
  opacity: ${({ $isVisible = false }) => ($isVisible ? 0 : 1)};
  pointer-events: ${({ $isVisible = false }) => ($isVisible ? "auto" : "none")};
  transition: all 0s ease;
  z-index: -1;
`;

export const ImageInAdminContainer = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;

  @media (min-width: 500px) {
    width: 128px;
    height: 128px;
  }
`;
