"use client";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
  min-height: 100vh;
  padding: 32px 32px 80px 32px;
  gap: 64px;

  @media (min-width: 40rem) {
    padding: 80px;
  }
`;

export const SideBar = styled.div`
  display: none;

  @media (min-width: 48rem) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin-top: 110px;
  }
`;

export const BlogContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 48rem) {
    gap: 50px;
  }
`;

export const BlogCardFrame = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 48rem) {
    gap: 50px;
  }
`;

// Style cho banner.tsx
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
