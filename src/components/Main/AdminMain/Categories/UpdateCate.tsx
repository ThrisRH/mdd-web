"use client";
import React, { useState } from "react";
import { DetailContainer, HeaderFormContainer } from "../styles/Page.styles";
import { H5 } from "@/components/Typography/Heading.styles";

import { Body1, CustomBody } from "@/components/Typography/Body.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { CustomButton } from "@/components/ui/button/styled";
import { Loader } from "../../Loading.styles";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import { useRouter } from "next/navigation";
import BlogTitleInput from "../Blogs/CreateInputs/BlogTitleInput";
import BlogSlugInput from "../Blogs/CreateInputs/BlogSlugInput";

interface Props {
  cate: CateProps;
}

const UpdateCate = ({ cate }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState(cate);

  const router = useRouter();

  useState("");

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
        }
      );

      const result = await response.json();
      if (!response.ok) {
        setErrorMessage(result.error);
      }

      console.log(result);
      router.replace("/admin-panel/mycates");
    } catch (error) {
      setErrorMessage("Lỗi server");
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
          <H5 $size={24}>Chỉnh sửa danh mục</H5>
          {isLoading ? (
            <CustomButton $isDisable={true} $bgColor="#aeaeae" $width="150px">
              <Loader />
              <CustomBody $color="#fff" $weight={600}>
                Đang lưu
              </CustomBody>
            </CustomButton>
          ) : (
            <CustomButton
              $width="150px"
              $hoverBgColor="rgba(0,0,0,0.8)"
              onClick={() => handleUpdateCate(form.documentId)}
            >
              <CustomBody $color="#fff">Lưu thay đổi</CustomBody>
            </CustomButton>
          )}
        </HeaderFormContainer>
        <DetailContainer>
          <Body1 $fontSize="18px" $weight={600}>
            Chi tiết
          </Body1>

          <FlexContainer $flexDirection="row" $gap="md">
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
          </FlexContainer>
        </DetailContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default UpdateCate;
