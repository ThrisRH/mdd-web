import React from "react";
import { FormInput, FormInputContainer, Label } from "./styled";

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
      <Label className="body-5">{label}</Label>
      <FormInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Thêm tiêu đề mô tả bài viết của bạn"
        $minHeight="100px"
        $canOverflow={canOverflow}
      />
      <Label className="body-5">
        {value.length} / {maxLength}
      </Label>
    </FormInputContainer>
  );
};

export default BlogContentInput;
