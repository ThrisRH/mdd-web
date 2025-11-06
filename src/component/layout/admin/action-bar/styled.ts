import styled from "styled-components";

export const ActionContainer = styled.div<{
  $visible: boolean;
}>`
  position: ${(props) => (props.$visible ? "sticky" : "absolute")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  overflow: hidden;
  opacity: ${(props) => (props.$visible ? 1 : 0)};

  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};

  height: 64px;
  top: 93px;
  width: 100%;
  padding: 32px;

  background-color: rgb(52, 73, 82);

  transform: ${(props) =>
    props.$visible ? "translateY(0)" : "translateY(-20px)"};
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;
`;
