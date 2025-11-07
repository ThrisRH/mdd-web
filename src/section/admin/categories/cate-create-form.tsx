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

import { CustomButton } from "@/component/button/styled";
import BlogTitleInput from "../blogs/inputs/blog-title-input";
import BlogSlugInput from "../blogs/inputs/blog-slug-input";
import { Loader } from "../../client/main/loading/styled";
import { Row } from "@/styles/common";
import { handleError } from "@/utils/handle-error";
import { ErrorText } from "@/styles/typography";
import { FlexContainer, FormContainer } from "@/styles/layout";

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
          <h1>Tạo danh mục mới</h1>
          <CloseIconContainer onClick={() => setIsCreateCatePopupOpen(false)}>
            <CloseIC fill={"#000"} />
          </CloseIconContainer>
        </HeaderFormContainer>
        <DetailContainer>
          <p className="body-1">Chi tiết</p>

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
          {errorMessage !== "" ? <ErrorText>{errorMessage}</ErrorText> : <p />}
          {isLoading ? (
            <CustomButton
              $width="200px"
              onClick={() => handlePublish()}
              disabled={true}
            >
              <Row $align="center" $justify="center">
                <Loader />
                <p className="body-1">Đang tạo</p>
              </Row>
            </CustomButton>
          ) : (
            <CustomButton
              $width="200px"
              onClick={() => handlePublish()}
              $bgColor="#F1DBC4"
            >
              <p className="body-1">Tạo danh mục</p>
            </CustomButton>
          )}
        </FormFooter>
      </FormContainer>
    </FormWrapper>
  );
};

export default CreateCategory;
