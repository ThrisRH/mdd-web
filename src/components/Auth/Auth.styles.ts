import styled from "styled-components";

export const EmptyWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 404px);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 36px 0px;
  width: 50%;
  height: auto;
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;

export const OAuthArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const GoogleLoginButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 2px;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
`;
