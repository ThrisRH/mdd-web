import React, { useState } from "react";
import {
  InputArea,
  InputContainer,
  InputField,
  ShowPasswordField,
} from "./Input.style";
import { H5 } from "../Typography/Heading.styles";
import EyeIC from "@/assets/svg/eye.jsx";
interface InputProps {
  type: "text" | "password";
  label: string;
  placeholder: string;
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ value, onchange, type, label, placeholder }: InputProps) => {
  const [isPassword, setIsPassword] = useState(type === "password");
  return (
    <InputContainer>
      <H5 $size={20} $color="#000">
        {label}
      </H5>
      <InputArea>
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
      </InputArea>
    </InputContainer>
  );
};

export default Input;
