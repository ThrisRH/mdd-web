import styled from "styled-components";

export const BlogList = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BlogItem = styled.li`
  cursor: pointer;
  width: 100%;
`;

// Send content
export const InputWrapper = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  padding: 0px 12px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 48px;
`;

// Topic.tsx
export const Select = styled.select`
  flex: 1;
  outline: none;
`;
