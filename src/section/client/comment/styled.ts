import styled from "styled-components";

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px #d5cbcb solid;
  height: fit-content;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: gray;
  }
`;

export const SubmitField = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  border-top: 1px #d5cbcb solid;
  justify-content: flex-end;
  align-items: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 1px #000 solid;
  color: #000;

  @media (min-width: 40rem) {
    width: 208px;
  }
`;

export const Content = styled.p`
  font-size: 20px;
`;

// User comment card

export const CommentCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const CommentImageWrapper = styled.div`
  min-width: 60px;
  height: 60px;
  position: relative;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-style: 16px;
`;
