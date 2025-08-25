import styled from "styled-components";

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px #D5CBCB solid;
    height: fit-content
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
  display: flex;
  padding: 30px;
  border-top: 1px #D5CBCB solid;
  justify-content: flex-end;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: 1px #000 solid;
  color: #000;

  @media (min-width: 40rem) {
    width:208px
  }
`