import styled from "styled-components";

export const ButtonContainer = styled.button<{
  $variant: "primary" | "secondary";
  $height?: string;
  $isDisable?: boolean;
}>`
  width: 100%;
  height: ${(props) => props.$height || "44px"};
  background-color: ${(props) =>
    props.$isDisable
      ? "#CBCBCB !important"
      : props.$variant === "primary"
      ? "#EA8E31"
      : "#F1DBC4"};
  border-radius: 8px;
  padding: 10px;
  cursor: ${(props) => (props.$isDisable ? "not-allowed" : "pointer")};
`;
