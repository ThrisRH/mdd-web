import React, { ReactNode } from "react";
import { Content } from "../Main/Styled/AboutContent.styles";
import { MainButtonContainer } from "@/styles/components/buttons/Button.styles";

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
    <MainButtonContainer
      $height={height || "44px"}
      className={className}
      $variant={variant}
      $isDisable={disable}
      onClick={onClickFunc}
      disabled={disable || false}
    >
      <Content>{children}</Content>
    </MainButtonContainer>
  );
};
export default Button;
