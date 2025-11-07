import styled from "styled-components";

// Admin Body layout
export const MainContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c5c5c5 #f1f1f1;
`;

export const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .BottomNavbar {
    display: flex;

    @media (min-width: 424px) {
      display: none;
    }
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  min-height: calc(100vh - 64px);
  overflow-y: auto;
`;

// Container của tab trên navbar
export const TabContainer = styled.div<{
  $scale?: string;
  $isSelected: boolean;
}>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.$isSelected ? "rgba(0,0,0,0.05) " : "transparent"};
  gap: 24px;
  width: ${(props) => props.$scale || "100%"};
  height: ${(props) => props.$scale || "48px"};
  padding: 4px 12px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0000000d;
  }
`;

// Common Container
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
