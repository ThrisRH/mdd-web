import React from "react";
import { ButtonWrapper } from "./styled";

export type IconButtonProps = {
  icon: React.ReactNode;
  variant: "primary" | "secondary" | "outline" | "shadow";
  children: React.ReactNode;
  onClick: () => void;
  isDisable?: boolean;
};

const IconButton = ({
  icon,
  variant,
  children,
  onClick,
  isDisable = false,
}: IconButtonProps) => {
  return (
    <ButtonWrapper $variant={variant} onClick={onClick} disabled={isDisable}>
      {icon}
      <p className="body-2">{children}</p>
    </ButtonWrapper>
  );
};

export default IconButton;
