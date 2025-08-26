"use client";
import React, { ReactNode } from "react";
import { Container } from "./Styled/UserDetails.styles";

interface Props {
  children: ReactNode;
}

const UserDetails = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default UserDetails;
