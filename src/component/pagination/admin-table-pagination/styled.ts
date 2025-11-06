import styled from "styled-components";

export const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: ${({ $active }) => ($active ? "#0f62fe" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#0353e9" : "#f0f0f0")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
