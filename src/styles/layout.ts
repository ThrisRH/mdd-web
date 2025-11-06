import styled from "styled-components";

export const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .BottomNavbar {
    display: flex;

    @media (min-width: 424px) {
      display: none;
    }
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  min-height: calc(100vh - 64px);
  overflow-y: auto;
`;
