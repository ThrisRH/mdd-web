import React, { useState } from "react";
import {
  InputContainer,
  InputField,
  InputWrapper,
  ShowPasswordField,
} from "./styled";
import { H5 } from "@/components/Typography/Heading.styles";
import EyeIC from "@/assets/svg/eye.jsx";
import { Body } from "@/components/Typography/Body.styles";

export type InputProps = {
  type: "text" | "password";
  label: string;
  placeholder: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, placeholder, value, onchange, type }: InputProps) => {
  const [isPassword, setIsPassword] = useState(type === "password");
  return (
    <InputWrapper>
      <Body $variant="body0" $color="#000">
        {label}
      </Body>
      <InputContainer>
        <InputField
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          type={isPassword ? "password" : "text"}
        />
        {type === "password" && (
          <ShowPasswordField onClick={() => setIsPassword(!isPassword)}>
            <EyeIC />
          </ShowPasswordField>
        )}
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;
