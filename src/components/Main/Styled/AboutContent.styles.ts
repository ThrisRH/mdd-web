"use client";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  padding: 5.5rem 1rem;

  @media (min-width: 768px) {
    padding: 7rem;
  }
  @media (min-width: 1024px) {
    padding: 12rem;
    margin-top: 0;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1058px;
  height: fit-content;
  padding: 10rem 2.5rem 2.5rem 2.5rem;
  gap: 1.5rem;
  border-radius: 40px;
  background-color: rgba(241, 219, 196, 0.3);
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: -100px;
  width: 172px;
  height: 172px;

  @media (min-width: 1024px) {
    top: -150px;
    width: 280px;
    height: 280px;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Content = styled.div<{ $gap?: number }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap || 16}px;
`;

export const ContactSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterSection = styled.div`
  width: 100%;
`;
