import { FormInput, FormInputContainer, Label } from "./styled";

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
    <Label className="body-5">{label}</Label>
    <FormInput
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        setIsEmpty("");
      }}
      placeholder="Thêm tiêu đề mô tả bài viết của bạn"
      rows={2}
    />
    <Label className="body-5">
      {value.length} / {maxLength}
    </Label>
  </FormInputContainer>
);

export default BlogTitleInput;
