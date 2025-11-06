import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 190px;

  @media (min-width: 48rem) {
    height: 300px;
  }
`;
export const Logo = styled.div`
  position: relative;
  width: 116px;
  height: 116px;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 40rem) {
    width: 174px;
    height: 174px;
  }
`;
