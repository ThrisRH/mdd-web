import styled from "styled-components";

export const TabsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;

export const DateDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
