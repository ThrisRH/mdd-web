import React from "react";
import {
  ImageInput,
  ImageInputContainer,
  ImagePreview,
  LabelContainer,
  LabelImageContainer,
} from "../../../../../styles/components/inputs/Input.styles";
import { Body1, Body3 } from "@/components/Typography/Body.styles";
import AddImageIC from "@/assets/svg/addimage";
import { ImageContainer } from "@/components/blogs/blogcard/styled";

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
        <Body1 $fontSize="18px" $weight={600}>
          Ảnh bìa của bài viết
        </Body1>
        <Body3 $color="#979797" $size={14}>
          Chọn ảnh bìa nổi bật để thu hút sự chú ý của người xem.
        </Body3>
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
              <Body3>Tải tệp lên</Body3>
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
