import { Body1, Body3 } from "@/components/Typography/Body.styles";
import { FormInput, FormInputContainer } from "../../styles/Input.styles";

interface Props {
  value: string;
  onChange: (v: string) => void;
  maxLength: number;
  setIsEmpty: (v: string) => void;
  isEmpty: boolean;
}

const BlogTitleInput = ({
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
    <Body3
      $size={12}
      $color={isEmpty ? "#ad3945" : "#979797"}
      $fontWeight="500"
    >
      Tiêu đề (bắt buộc)
    </Body3>
    <FormInput
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        setIsEmpty("");
      }}
      placeholder="Thêm tiêu đề mô tả bài viết của bạn"
      rows={2}
    />
    <Body1 $color="#979797" $fontSize="12px">
      {value.length} / {maxLength}
    </Body1>
  </FormInputContainer>
);

export default BlogTitleInput;
