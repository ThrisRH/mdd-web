import React, { ReactNode } from "react";
import { ButtonContainer, Content } from "./Button.styles";

type Props = {
  children: ReactNode;
  primary: boolean;
  onClickFunc?: () => void;
  className?: string;
  height?: string;
};

const Button = ({
  className,
  children,
  primary,
  onClickFunc,
  height,
}: Props) => {
  return (
    <ButtonContainer
      $height={height || "44px"}
      className={className}
      $primary={primary}
      onClick={onClickFunc}
    >
      <Content>{children}</Content>
    </ButtonContainer>
  );
};

export default Button;
