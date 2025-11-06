import styled from "styled-components";

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

// Favorite
export const BlogList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
  list-style-position: outside;

  width: 100%;
  gap: 1.5rem;
`;

export const BlogItem = styled.li`
  cursor: pointer;
  width: 100%;
`;

// Sidebar main
export const SideBarWrapper = styled.div`
  display: none;

  @media (min-width: 48rem) {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin-top: 110px;
  }
`;
