import React from "react";
import { ButtonWrapper } from "./styled";
import { H2 } from "@/components/Typography/Heading.styles";

export type MainButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick: () => void;
  isDisable?: boolean;
};

const MainButton = ({
  variant,
  children,
  onClick,
  isDisable,
}: MainButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      $variant={variant}
      $isDisable={isDisable || false}
      disabled={isDisable || false}
    >
      <H2>{children}</H2>
    </ButtonWrapper>
  );
};

export default MainButton;
