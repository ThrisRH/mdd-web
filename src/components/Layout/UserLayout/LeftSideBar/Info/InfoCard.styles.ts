import styled from "styled-components";

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
  justify-content: ${({ $isNavbar }) => (!$isNavbar ? "center" : "start")};
  flex-direction: row;
  gap: ${(props) => props.$gap || 6}px;

  @media (min-width: 40rem) {
    justify-content: center;
  }
`;

// Avatar wrapper
export const AvatarWrapper = styled.div`
  position: relative;
  max-width: 220px;
  width: 100%;
  aspect-ratio: 1/1;

  @media (min-width: 640px) {
    max-width: 220px;
    width: 100%;
    aspect-ratio: 1/1;
  }

  img {
    border-radius: 9999px; /* rounded-full */
    object-fit: cover;
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
