import React, { useState } from "react";
import {
  ButtonContainer,
  CloseIconContainer,
  DetailContainer,
  FormFooter,
  FormWrapper,
  HeaderFormContainer,
} from "../styles/Page.styles";

import CloseIC from "@/assets/svg/cancel";

import {
  FlexContainer,
  FormContainer,
} from "@/styles/components/layout/Common.styles";
import { CustomButton } from "@/component/button/styled";
import BlogTitleInput from "../Blogs/CreateInputs/BlogTitleInput";
import BlogSlugInput from "../Blogs/CreateInputs/BlogSlugInput";
import { Body, Text } from "@/styles/theme/temp-typo";
import { Loader } from "../../client/main/loading/styled";
import { Row } from "@/styles/common";
import { handleError } from "@/utils/handle-error";

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

      if (!response.ok) {
        return null;
      }
      window.location.href = "/admin-panel/mycates";
    } catch (err: any) {
      handleError();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
        <HeaderFormContainer>
          <Text $variant="h1">Tạo danh mục mới</Text>
          <CloseIconContainer onClick={() => setIsCreateCatePopupOpen(false)}>
            <CloseIC fill={"#000"} />
          </CloseIconContainer>
        </HeaderFormContainer>
        <DetailContainer>
          <Body $weight={600}>Chi tiết</Body>

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
            <Body $color="#8f4242">{errorMessage}</Body>
          ) : (
            <Body />
          )}
          {isLoading ? (
            <CustomButton
              $width="200px"
              onClick={() => handlePublish()}
              $bgColor="#CDCDCD"
              $isDisable={true}
              disabled={true}
            >
              <Row $align="center" $justify="center">
                <Loader />
                <Body>Đang tạo</Body>
              </Row>
            </CustomButton>
          ) : (
            <CustomButton
              $width="200px"
              onClick={() => handlePublish()}
              $bgColor="#F1DBC4"
            >
              <Body $whiteSpace="nowrap">Tạo danh mục</Body>
            </CustomButton>
          )}
        </FormFooter>
      </FormContainer>
    </FormWrapper>
  );
};

export default CreateCategory;
