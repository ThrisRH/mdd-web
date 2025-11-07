import React, { useRef, useState } from "react";
import { CustomButton } from "@/component/button/styled";
import Image from "next/image";
import { ImageContainer } from "@/section/client/blogs/blogcard/styled";
import { BorderContainer, FlexContainer } from "@/styles/layout";
import { AboutPageSectionProps } from "./contact-box";
import { ImageInput } from "../blogs/inputs/styled";

const AvatarEditDescription = {
  content:
    "Bạn nên dùng ảnh có độ phân giải tối thiểu 98 x 98 pixel và có kích thước tối đa 4 MB. Hãy dùng tệp PNG (không dùng ảnh động).",
};

const ProfileBox = ({ data, setData }: AboutPageSectionProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setData((prev) => ({
        ...prev,
        avatarFileTemp: file,
      }));
      console.log("data after file change: ", data);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <FlexContainer className="profile-in-content" $gap="sm">
      <p className="body-1">Ảnh đại diện</p>

      <FlexContainer $flexDirection="row" $gap="md">
        <BorderContainer $justify="center">
          <ImageContainer $variant="avatar">
            <Image
              className="rounded-full"
              alt="Avatar image"
              fill
              style={{ objectFit: "cover" }}
              src={
                previewImage
                  ? previewImage
                  : data.author.avatar.url.startsWith("https")
                    ? data.author.avatar.url
                    : `/baseurl${data.author.avatar.url}`
              }
            />
          </ImageContainer>
        </BorderContainer>

        <FlexContainer $justify="center">
          <p className="body-3">{AvatarEditDescription.content}</p>
          <CustomButton
            $width="100px"
            $bgColor="transparent"
            $border="1px solid rgba(0,0,0,0.2)"
            onClick={handleButtonClick}
          >
            Thay đổi
          </CustomButton>
          <ImageInput
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProfileBox;
