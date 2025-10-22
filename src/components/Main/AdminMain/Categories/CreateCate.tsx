import React, { useState } from "react";
import {
  ButtonContainer,
  CloseIconContainer,
  DetailContainer,
  FormFooter,
  FormWrapper,
  HeaderFormContainer,
} from "../styles/Page.styles";
import { H5 } from "@/components/Typography/Heading.styles";

import CloseIC from "@/assets/svg/cancel";
import { Body1, CustomBody } from "@/components/Typography/Body.styles";
import { toast } from "react-toastify";

import {
  FlexContainer,
  FormContainer,
} from "@/styles/components/layout/Common.styles";
import { CustomButton } from "@/components/ui/button/styled";
import BlogTitleInput from "../Blogs/CreateInputs/BlogTitleInput";
import BlogSlugInput from "../Blogs/CreateInputs/BlogSlugInput";

const CreateCategory = ({
  setIsCreateCatePopupOpen,
}: {
  setIsCreateCatePopupOpen: (status: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const handlePublish = async () => {
    setIsLoading(true);
    if (title === "" || slug === "") {
      setErrorMessage("Vui lòng điền đầy đủ thông tin!");
      setIsLoading(false);
      return;
    }

    try {
      const cateBody = {
        data: {
          tile: title,
          slug: slug,
        },
      };

      const response = await fetch("/mmdblogsapi/cates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cateBody),
      });

      const cateJson = await response.json();

      if (!response.ok) {
        console.error("Post failed:", cateJson);
        return;
      }
      window.location.href = "/adminpanel/mycates";
    } catch (err: any) {
      toast.error("Có lỗi xảy ra khi tạo danh mục mới: " + err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
        <HeaderFormContainer>
          <H5 $size={24}>Tạo danh mục mới</H5>
          <CloseIconContainer onClick={() => setIsCreateCatePopupOpen(false)}>
            <CloseIC fill={"#000"} />
          </CloseIconContainer>
        </HeaderFormContainer>
        <DetailContainer>
          <Body1 $fontSize="18px" $weight={600}>
            Chi tiết
          </Body1>

          <FlexContainer $flexDirection="row">
            {/* Input title */}
            <BlogTitleInput
              label="Tiêu đề (bắt buộc)"
              isEmpty={errorMessage !== ""}
              value={title}
              onChange={setTitle}
              setIsEmpty={setErrorMessage}
              maxLength={100}
            />

            {/* Input slug of blog */}
            <BlogSlugInput
              label="Tên viết tắt của bài viết (bắt buộc)"
              slug={slug}
              setSlug={setSlug}
              title={title}
              maxLength={50}
            />
          </FlexContainer>
        </DetailContainer>

        {/* Form footer */}
        <FormFooter>
          {errorMessage !== "" ? (
            <CustomBody $color="#8f4242">{errorMessage}</CustomBody>
          ) : (
            <CustomBody />
          )}
          <ButtonContainer>
            {isLoading ? (
              <CustomButton
                onClick={() => handlePublish()}
                $bgColor="#CDCDCD"
                $isDisable={true}
                disabled={true}
              >
                <CustomBody>Tạo danh mục</CustomBody>
              </CustomButton>
            ) : (
              <CustomButton
                $width="auto"
                onClick={() => handlePublish()}
                $bgColor="#F1DBC4"
              >
                <CustomBody>Tạo danh mục</CustomBody>
              </CustomButton>
            )}
          </ButtonContainer>
        </FormFooter>
      </FormContainer>
    </FormWrapper>
  );
};

export default CreateCategory;
