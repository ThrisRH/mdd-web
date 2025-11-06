import styled, { keyframes } from "styled-components";

// Search Blog Card
export const SearchBlogCardWrapper = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  padding: 0 24px;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-bottom: 12px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const loading = keyframes`
  from {
    left: -100%;
  } 
  to {
    left: 100%
  }
`;
export const LoadingBar = styled.div`
  position: absolute;
  width: 95%;
  height: 2px;
  background-color: transparent;
  overflow: hidden;
  border-radius: 4px;
  margin: 0 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, #ea8e31, #f5cba7);
    border-radius: inherit;
    animation: ${loading} 1.2s ease-in-out infinite;
  }
`;
