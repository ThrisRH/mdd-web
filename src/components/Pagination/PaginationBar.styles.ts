import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PageNumber = styled.button<{ $active?: boolean }>`
  border: none;
  background: ${({ $active }) => ($active ? "#F1DBC4" : "transparent")};
  color: ${({ $active }) => ($active ? "black" : "white")};
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
`;