import React from "react";
import { ButtonWrapper } from "./styled";

export type MainButtonProps = {
  variant: "primary" | "secondary";
  children: string;
  onClick: () => void;
  isDisable?: boolean;
};

const MainButton = ({
  variant,
  children,
  onClick,
  isDisable = false,
}: MainButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      $variant={variant}
      disabled={isDisable || false}
    >
      <h2>{children}</h2>
    </ButtonWrapper>
  );
};

export default MainButton;
