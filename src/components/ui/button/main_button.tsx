import React from "react";
import { ButtonWrapper } from "./styled";
import { Text } from "@/styles/theme/typography";

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
      <Text $variant="h2" $align="center">
        {children}
      </Text>
    </ButtonWrapper>
  );
};

export default MainButton;
