import {
  FormInput,
  FormInputContainer,
  LabelContainer,
} from "../../../../styles/components/inputs/Input.styles";
import ReloadIC from "@/assets/svg/interact/reload";
import { formatSlug } from "../../../../utils/handle-slug";
import { IconContainer } from "../../styles/Page.styles";
import { Text } from "@/styles/theme/temp-typo";

interface Props {
  label: string;
  slug: string;
  setSlug: (v: string) => void;
  title: string;
  maxLength: number;
}

const BlogSlugInput = ({ label, slug, setSlug, title, maxLength }: Props) => {
  const handleAuto = () => setSlug(formatSlug(title));
  const handleBlur = () => setSlug(formatSlug(slug));

  return (
    <FormInputContainer
      $borderColor={slug.length > maxLength ? "#ad3945" : "rgba(0,0,0,0.2)"}
    >
      <LabelContainer
        $padding="none"
        $flexDirection="row"
        $justifyContent="space-between"
      >
        <Text $variant="body5" $color="#979797" $weight="500">
          {label}
        </Text>
        <IconContainer onClick={handleAuto}>
          <ReloadIC />
        </IconContainer>
      </LabelContainer>
      <FormInput
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        onBlur={handleBlur}
        placeholder="Tên viết tắt của bài viết"
      />
      <Text $variant="body5" $color="#979797">
        {slug.length} / {maxLength}
      </Text>
    </FormInputContainer>
  );
};

export default BlogSlugInput;
