import React from "react";
import { ButtonWrapper } from "./styled";
import { Row } from "../../styles/common";
import { Body, Caption } from "@/styles/theme/typography";

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
  isDisable,
}: IconButtonProps) => {
  return (
    <ButtonWrapper
      $variant={variant}
      onClick={onClick}
      $isDisable={isDisable || false}
      disabled={isDisable || false}
    >
      <Row $justify="center" $align="center">
        {icon}
        <Body>{children}</Body>
      </Row>
    </ButtonWrapper>
  );
};

export default IconButton;
