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
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #EA8E31;
    box-shadow: 0 0 0 3px rgba(234, 142, 49, 0.1);
  }
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  flex: 1;
  transition: color 0.3s ease;

  &::placeholder {
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: #EA8E31;
  }
`;

export const ShowPasswordField = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: none;
  background: none;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

