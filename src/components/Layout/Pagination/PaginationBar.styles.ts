import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const PageNumber = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 32px;
  height: 32px;
  background: ${({ $active }) => ($active ? "#F1DBC4" : "transparent")};
  color: ${({ $active }) => ($active ? "black" : "white")};
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
`;

export const ArrowButton = styled.button<{ $rotate: number }>`
  transform: rotate(${(props) => props.$rotate}deg);
`;
