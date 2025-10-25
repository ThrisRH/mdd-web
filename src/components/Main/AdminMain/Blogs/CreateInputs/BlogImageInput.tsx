import React from "react";
import {
  ImageInput,
  ImageInputContainer,
  ImagePreview,
  LabelContainer,
  LabelImageContainer,
} from "../../../../../styles/components/inputs/Input.styles";
import AddImageIC from "@/assets/svg/addimage";
import { ImageContainer } from "@/components/blogs/blogcard/styled";
import { Caption, Text } from "@/styles/theme/typography";

interface Props {
  previewImage: string | null;
  setPreviewImage: (v: string) => void;
}

const BlogImageInput = ({ previewImage, setPreviewImage }: Props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };
  return (
    <>
      <LabelContainer $padding="none">
        <Text $variant="body0" $weight={600}>
          Ảnh bìa của bài viết
        </Text>
        <Caption $color="#979797">
          Chọn ảnh bìa nổi bật để thu hút sự chú ý của người xem.
        </Caption>
      </LabelContainer>
      <ImageInputContainer>
        <LabelImageContainer htmlFor="file-upload">
          {previewImage ? (
            <ImageContainer $variant="preview">
              <ImagePreview src={previewImage} alt="upload-image" />
            </ImageContainer>
          ) : (
            <>
              <AddImageIC />
              <Text $variant="body3">Tải tệp lên</Text>
            </>
          )}
        </LabelImageContainer>

        <ImageInput
          type="file"
          name="files"
          id="file-upload"
          onChange={handleFileChange}
        />
      </ImageInputContainer>
    </>
  );
};

export default BlogImageInput;
