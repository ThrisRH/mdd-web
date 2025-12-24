import ReloadIC from "@/assets/svg/Interact/reload";
import { formatSlug } from "../../../../utils/handle-slug";
import { IconContainer } from "../../styles/Page.styles";
import { FormInput, FormInputContainer, Label, LabelContainer } from "./styled";

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
        <Label className="body-5">{label}</Label>
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
      <Label className="body-5">
        {slug.length} / {maxLength}
      </Label>
    </FormInputContainer>
  );
};

export default BlogSlugInput;
