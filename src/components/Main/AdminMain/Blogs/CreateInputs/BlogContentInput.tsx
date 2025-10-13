import React from "react";
import { FormInput, FormInputContainer } from "../../styles/Input.styles";
import { Body1, Body3 } from "@/components/Typography/Body.styles";

interface Props {
  value: string;
  onChange: (v: string) => void;
  maxLength: number;
}

const BlogContentInput = ({ value, onChange, maxLength }: Props) => {
  return (
    <FormInputContainer
      $borderColor={value.length > maxLength ? "#ad3945" : "rgba(0, 0, 0, 0.2)"}
    >
      <Body3 $size={12} $color="#979797" $fontWeight="500">
        Nội dung chính (bắt buộc)
      </Body3>
      <FormInput
        onChange={(e) => onChange(e.target.value)}
        placeholder="Thêm tiêu đề mô tả bài viết của bạn"
        $minHeight="100px"
      />
      <Body1 $color="#979797" $fontSize="12px">
        {value.length} / {maxLength}
      </Body1>
    </FormInputContainer>
  );
};

export default BlogContentInput;
