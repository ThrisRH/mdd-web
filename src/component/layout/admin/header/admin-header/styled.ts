import styled from "styled-components";

// Header
export const LogoText = styled.h5`
  font-size: 20px;
  white-space: nowrap;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 64px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0.2px rgba(0, 0, 0, 0.5);
  align-items: center;
  padding: 0px 24px;
  justify-content: space-between;
  z-index: 100;

  .SearchArea {
    width: 50%;

    @media (min-width: 425px) {
      width: 40%;
    }
  }
`;

export const HeaderItemsGroup = styled.div<{ $width?: string }>`
  display: flex;
  width: ${(props) => props.$width || "auto"};
  flex-direction: row;
  align-items: center;
  gap: 12px;

  .expand-tab-bar {
    display: none;

    @media (max-width: 424px) {
      display: flex;
      gap: 24px;
    }
  }

  a {
    display: none;

    @media (min-width: 425px) {
      display: block;
    }
  }

  .logoText {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const CreateBlogButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  background-color: white;
  border: solid 1px rgba(35, 50, 56, 0.2);
  border-radius: 24px;
  padding: 4px;
  height: auto;
  cursor: pointer;

  p {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    padding: 2px 16px;
  }

  &:hover {
    background-color: rgba(35, 50, 56, 0.1);
  }

  &:active {
    background-color: rgba(35, 50, 56, 0.3);
  }
`;

export const DropdownCreateContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  min-width: 100px;
  width: max-content;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;

export const ActionWrapper = styled.div`
  position: relative;
`;
