import React from "react";

import AddImageIC from "@/assets/svg/add-image";
import { ImageContainer } from "@/section/client/blogs/blogcard/styled";

import {
  ImageInput,
  ImageInputContainer,
  ImagePreview,
  Label,
  LabelContainer,
  LabelImageContainer,
} from "./styled";

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
        <p className="body-1">Ảnh bìa của bài viết</p>
        <Label className="body-3">
          Chọn ảnh bìa nổi bật để thu hút sự chú ý của người xem.
        </Label>
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
              <p className="body-3">Tải tệp lên</p>
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
