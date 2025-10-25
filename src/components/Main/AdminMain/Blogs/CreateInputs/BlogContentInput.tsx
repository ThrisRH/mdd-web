import React from "react";
import {
  FormInput,
  FormInputContainer,
} from "../../../../../styles/components/inputs/Input.styles";
import { Text } from "@/styles/theme/typography";

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
      <Text $variant="body5" $color="#979797">
        {label}
      </Text>
      <FormInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Thêm tiêu đề mô tả bài viết của bạn"
        $minHeight="100px"
        $canOverflow={canOverflow}
      />
      <Text $variant="body5" $color="#979797">
        {value.length} / {maxLength}
      </Text>
    </FormInputContainer>
  );
};

export default BlogContentInput;
