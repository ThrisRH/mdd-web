import { theme } from "@/styles/theme";
import styled, { keyframes } from "styled-components";

export const Container = styled.div<{ $isNavbar?: boolean }>`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  background-color: transparent;
  padding: 0px 16px;
  gap: 16px;

  flex-direction: ${({ $isNavbar }) => (!$isNavbar ? "column" : "row")};
  justify-content: ${({ $isNavbar }) => (!$isNavbar ? "center" : "start")};
`;

export const Field = styled.div<{ $isNavbar?: boolean; $gap?: number }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.$isNavbar ? "start" : "center")};
  gap: ${(props) => props.$gap || 6}px;
`;

// Avatar wrapper
const reflect = keyframes`
  to {
    left: calc(100% + 100px);
  }
`;
export const AvatarWrapper = styled.div`
  position: relative;
  max-width: 80px;
  width: 100%;
  aspect-ratio: 1/1;

  @media (${theme.breakpoints.tablet}) {
    max-width: 220px;
    width: 100%;
    aspect-ratio: 1/1;
  }

  img {
    border-radius: 9999px; /* rounded-full */
    object-fit: cover;
  }

  image::after {
    content: "";
    height: 600px;
    width: 600px;

    background: linear-gradient(to right, transparen, #ffffff70, transparent);
    animation: ${reflect} 800ms ease-out infinite;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailsWrapper = styled.div<{ $isDetails?: boolean }>`
  display: ${({ $isDetails }) => ($isDetails ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 640px) {
    display: flex;
  }
`;

export const Biography = styled.div`
  max-width: 322px;
  text-align: center;
`;

export const NameText = styled.h2<{ $isNavbar?: boolean }>`
  color: ${({ $isNavbar }) =>
    $isNavbar ? `${theme.colors.white500}` : `${theme.colors.black500}`};
`;

export const InterestText = styled.p<{ $isNavbar?: boolean }>`
  color: ${({ $isNavbar }) =>
    $isNavbar ? `${theme.colors.white500}` : `${theme.colors.black500}`};
`;
