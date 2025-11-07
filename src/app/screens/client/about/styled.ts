"use client";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 100px 16px;

  @media (${theme.breakpoints.phone}) {
    padding: 250px 24px 24px;
    margin-top: 0;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 40px 40px 40px;
  max-width: 1058px;
  width: 100%;
  height: fit-content;
  gap: 1.5rem;
  border-radius: 40px;

  background-color: rgba(241, 219, 196, 0.3);

  @media (${theme.breakpoints.phone}) {
    padding: 200px 40px 40px 40px;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: -100px;
  width: 200px;
  height: 200px;

  @media (${theme.breakpoints.phone}) {
    top: -180px;
    width: 346px;
    height: 346px;
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
