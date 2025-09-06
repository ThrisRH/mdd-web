import React, { ReactNode } from "react";
import { ButtonContainer } from "./Button.styles";
import { Content } from "../Main/Styled/AboutContent.styles";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClickFunc?: () => void;
  className?: string;
  height?: string;
  disable?: boolean;
};

const Button = ({
  className,
  children,
  variant = "secondary",
  onClickFunc,
  height,
  disable,
}: Props) => {
  return (
    <ButtonContainer
      $height={height || "44px"}
      className={className}
      $variant={variant}
      onClick={onClickFunc}
      disabled={disable || false}
      $isDisable={disable}
    >
      <Content>{children}</Content>
    </ButtonContainer>
  );
};
export default Button;
