import styled, { keyframes } from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  margin: 0px 16px;
  max-width: 706px;
  min-width: 20px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const SearchIConWrapper = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
`;

export const CancelButton = styled.button`
  cursor: pointer;
`;

export const SearchMainField = styled.div<{ $isFocus: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 2px 2px 2px 10px;
  border: 1px solid ${(props) => (props.$isFocus ? "#EA8E31" : "#fff")};
  border-radius: 100px;
  align-items: center;
  gap: 12px;
  min-width: 20px;
`;

export const Input = styled.input<{ $color?: string }>`
  flex: 2;
  outline: none;
  background: transparent;
  color: ${(props) => props.$color || "white"};
  caret-color: #ea8e31;
  min-width: 20px;
`;

export const ButtonSearch = styled.button<{ $primary: boolean }>`
  width: fit-content;
  height: 100%;
  background-color: ${(props) => (props.$primary ? "#EA8E31" : "#F1DBC4")};
  border-radius: 100px;
  font-weight: bold;
  cursor: pointer;
  font-family: var(--font-lora), serif;
  padding: 0px 16px;
`;

// For admin header searching bar
export const AdminSearchBarContainer = styled(SearchBarContainer)`
  margin: 0;
  max-width: none;
  position: relative;
  width: 100%;
`;

export const SearchResultArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  max-height: 500px;
  top: 60px;
  left: -50px;
  right: -50px;
  gap: 12px;
  background-color: white;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* làm tối nền */
  z-index: 1; /* nằm dưới SearchResultArea */
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const AdminSearchMainField = styled(SearchMainField)`
  border: 1px solid ${(props) => (props.$isFocus ? "#fff" : "#EA8E3190")};
  background-color: white;
  z-index: 2;
`;
