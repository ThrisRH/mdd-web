import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  height: auto;
  width: 100%;
  gap: 6px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 42px;
  padding: 6px 12px;
  border-radius: 12px;
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;

export const ShowPasswordField = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
