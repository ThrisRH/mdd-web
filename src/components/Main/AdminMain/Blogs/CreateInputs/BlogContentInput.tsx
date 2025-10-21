import React from "react";
import {
  FormInput,
  FormInputContainer,
} from "../../../../../styles/components/inputs/Input.styles";
import { Body, Body1, Body3 } from "@/components/Typography/Body.styles";

interface Props {
  label: string;
  value: string;
  onChange: (v: string) => void;
  maxLength: number;
  maxHeight?: number;
  canOverflow?: boolean;
}

const BlogContentInput = ({
  label,
  value,
  onChange,
  maxLength,
  maxHeight,
  canOverflow = false,
}: Props) => {
  return (
    <FormInputContainer
      $maxHeight={maxHeight}
      $borderColor={value.length > maxLength ? "#ad3945" : "rgba(0, 0, 0, 0.2)"}
    >
      <Body $variant="custom" $size={12} $color="#979797">
        {label}
      </Body>
      <FormInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Thêm tiêu đề mô tả bài viết của bạn"
        $minHeight="100px"
        $canOverflow={canOverflow}
      />
      <Body1 $color="#979797" $fontSize="12px">
        {value.length} / {maxLength}
      </Body1>
    </FormInputContainer>
  );
};

export default BlogContentInput;
