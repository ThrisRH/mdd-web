import {
  FormInput,
  FormInputContainer,
} from "../../../../styles/components/inputs/Input.styles";
import { Text } from "@/styles/theme/temp-typo";

interface Props {
  label: string;
  value: string;
  onChange: (v: string) => void;
  maxLength: number;
  setIsEmpty: (v: string) => void;
  isEmpty: boolean;
}

const BlogTitleInput = ({
  label,
  value,
  onChange,
  maxLength,
  isEmpty,
  setIsEmpty,
}: Props) => (
  <FormInputContainer
    $borderColor={
      value.length > maxLength || isEmpty ? "#ad3945" : "rgba(0,0,0,0.2)"
    }
  >
    <Text
      $variant="body5"
      $size={12}
      $color={isEmpty ? "#ad3945" : "#979797"}
      $weight="500"
    >
      {label}
    </Text>
    <FormInput
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        setIsEmpty("");
      }}
      placeholder="Thêm tiêu đề mô tả bài viết của bạn"
      rows={2}
    />
    <Text $variant="body5" $color="#979797">
      {value.length} / {maxLength}
    </Text>
  </FormInputContainer>
);

export default BlogTitleInput;
