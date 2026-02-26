"use client";

import React from "react";
import styled from "styled-components";
import { pageEnterAnimation } from "@/styles/animations";

const PageContainer = styled.div`
  width: 100%;
  ${pageEnterAnimation}
`;

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default PageTransition;
