"use client";
import React, { useState } from "react";
import { DetailContainer, HeaderFormContainer } from "../styles/Page.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { CustomButton } from "@/component/button/styled";
import { Loader } from "../../client/main/loading/styled";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";
import { useRouter } from "next/navigation";
import BlogTitleInput from "../Blogs/CreateInputs/BlogTitleInput";
import BlogSlugInput from "../Blogs/CreateInputs/BlogSlugInput";
import { Body, Text } from "@/styles/theme/temp-typo";
import SaveIC from "@/assets/svg/interact/save-button";
import { handleError } from "@/utils/handle-error";

interface Props {
  cate: CateProps;
}

const UpdateCate = ({ cate }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState(cate);

  const router = useRouter();

  const handleUpdateCate = async (documentId: string) => {
    setIsLoading(true);
    try {
      const updatedFields = {
        tile: form.tile,
        slug: form.slug,
      };

      if (!Object.values(updatedFields).some((v) => v !== "")) {
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `/mmdblogsapi/cates/${documentId}?populate=*`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: {
              ...updatedFields,
            },
          }),
        },
      );

      const result = await response.json();
      if (!response.ok) {
        setErrorMessage(result.error);
      }

      router.replace("/admin-panel/mycates");
    } catch (error) {
      handleError();
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <FlexContainer $flexDirection="row">
      <FlexContainer>
        <HeaderFormContainer>
          <Text $variant="h1">Chỉnh sửa danh mục</Text>
          {isLoading ? (
            <CustomButton $isDisable={true} $bgColor="#aeaeae" $width="150px">
              <Loader />
              <Body $weight={600}>Đang lưu</Body>
            </CustomButton>
          ) : (
            <CustomButton
              $width="fit-content"
              $hoverBgColor="rgba(0,0,0,0.8)"
              onClick={() => handleUpdateCate(form.documentId)}
            >
              <SaveIC />
              <Body $color="#fff">Lưu thay đổi</Body>
            </CustomButton>
          )}
        </HeaderFormContainer>
        <DetailContainer>
          <Text $variant="body0">Chi tiết</Text>

          {/* Input title */}
          <BlogTitleInput
            label={"Tiều đề danh mục"}
            isEmpty={errorMessage !== ""}
            value={form.tile}
            onChange={(e) => setForm((prev) => ({ ...prev, tile: e }))}
            setIsEmpty={setErrorMessage}
            maxLength={100}
          />
          {/* Input title */}
          <BlogSlugInput
            label={"Tên viết tắt của danh mục"}
            slug={form.slug}
            setSlug={(e) => setForm((prev) => ({ ...prev, slug: e }))}
            title={form.tile}
            maxLength={100}
          />
        </DetailContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default UpdateCate;
