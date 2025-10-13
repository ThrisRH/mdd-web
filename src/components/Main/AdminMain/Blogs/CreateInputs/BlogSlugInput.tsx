import { Body1, Body3 } from "@/components/Typography/Body.styles";
import {
  FormInputContainer,
  FormNormalInput,
  LabelContainer,
} from "../../styles/Input.styles";
import ReloadIC from "@/assets/svg/Interact/Reload";
import { formatSlug } from "../utils/HandleSlug";
import { IconContainer } from "../../styles/Page.styles";

interface Props {
  slug: string;
  setSlug: (v: string) => void;
  title: string;
  maxLength: number;
}

const BlogSlugInput = ({ slug, setSlug, title, maxLength }: Props) => {
  const handleAuto = () => setSlug(formatSlug(title));
  const handleBlur = () => setSlug(formatSlug(slug));

  return (
    <FormInputContainer
      $borderColor={slug.length > maxLength ? "#ad3945" : "rgba(0,0,0,0.2)"}
    >
      <LabelContainer $flexDirection="row" $justifyContent="space-between">
        <Body3 $size={12} $color="#979797" $fontWeight="500">
          Tên viết tắt của bài viết (bắt buộc)
        </Body3>
        <IconContainer onClick={handleAuto}>
          <ReloadIC />
        </IconContainer>
      </LabelContainer>
      <FormNormalInput
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        onBlur={handleBlur}
        placeholder="Tên viết tắt của bài viết"
      />
      <Body1 $color="#979797" $fontSize="12px">
        {slug.length} / {maxLength}
      </Body1>
    </FormInputContainer>
  );
};

export default BlogSlugInput;
