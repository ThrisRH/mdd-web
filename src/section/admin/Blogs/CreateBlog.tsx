import React, { useState } from "react";
import {
  CloseIconContainer,
  DetailContainer,
  FormFooter,
  FormWrapper,
  HeaderFormContainer,
} from "../styles/Page.styles";

import CloseIC from "@/assets/svg/cancel";
import CategorySelectionBox from "./CreateInputs/CategorySelectionBox";
import BlogSlugInput from "./CreateInputs/BlogSlugInput";
import BlogTitleInput from "./CreateInputs/BlogTitleInput";
import BlogContentInput from "./CreateInputs/BlogContentInput";
import BlogImageInput from "./CreateInputs/BlogImageInput";
import CustomEditor from "./CreateInputs/CKEditorInput/CustomEditor";
import TurndownService from "turndown";
import { CustomButton } from "@/component/button/styled";
import { FormContainer } from "@/styles/components/layout/Common.styles";
import { Body, Text } from "@/styles/theme/typography";
import { Loader } from "../../client/main/loading/styled";
import { Row } from "@/styles/common";

const CreateBlog = ({
  setIsCreatePopUpOpen,
}: {
  setIsCreatePopUpOpen: (status: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [title, setTitle] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [subContent, setSubContent] = useState("");
  const [cateSelected, setCateSelected] = useState("");
  const [cateSelectedName, setCateSelectedName] = useState("");

  // Slug
  const [slug, setSlug] = useState("");

  //   Image
  const [preview, setPreview] = useState<string | null>(null);

  const handlePublish = async () => {
    setIsLoading(true);
    if (
      title === "" ||
      cateSelected === "" ||
      mainContent === "" ||
      subContent === ""
    ) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin!");
      setIsLoading(false);
      return;
    }

    const turndownService = new TurndownService();
    var subContentMarkDown = turndownService.turndown(subContent);

    try {
      const fileInput = document.getElementById(
        "file-upload",
      ) as HTMLInputElement;
      const file = fileInput?.files?.[0];

      let imageId: number | null = null;

      // upload picture
      if (file) {
        const formData = new FormData();
        formData.append("files", file);

        const uploadRes = await fetch("/mmdblogsapi/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          return null;
        }

        const uploadJson = await uploadRes.json();

        if (uploadJson && uploadJson[0]?.id) {
          imageId = uploadJson[0].id;
        } else {
          return null;
        }
      }

      if (imageId) {
        const blogBody = {
          data: {
            title: title,
            mainContent: mainContent,
            slug: slug,
            cover: imageId,
            cate: cateSelected,
            subContent: subContentMarkDown,
          },
        };

        const postRes = await fetch("/mmdblogsapi/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogBody),
        });

        const postJson = await postRes.json();

        if (!postRes.ok) {
          return null;
        }
      }
      window.location.href = "/admin-panel/myblogs";
    } catch (err: any) {
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
        <HeaderFormContainer>
          <Text $variant="h1">Tạo bài viết mới</Text>
          <CloseIconContainer onClick={() => setIsCreatePopUpOpen(false)}>
            <CloseIC fill={"#000"} />
          </CloseIconContainer>
        </HeaderFormContainer>
        <DetailContainer>
          <Text $variant="body0">Chi tiết</Text>

          {/* Input title */}
          <BlogTitleInput
            label="Tiêu đề (bắt buộc)"
            isEmpty={errorMessage !== ""}
            value={title}
            onChange={setTitle}
            setIsEmpty={setErrorMessage}
            maxLength={100}
          />

          {/* Input main content */}
          <BlogContentInput
            label="Nội dung chính (bắt buộc)"
            value={mainContent}
            onChange={setMainContent}
            maxLength={1000}
          />

          {/* Input sub content */}
          <CustomEditor
            value={subContent}
            onChange={setSubContent}
            maxLength={10000}
          />

          {/* Input slug of blog */}
          <BlogSlugInput
            label="Tên viết tắt của bài viết (bắt buộc)"
            slug={slug}
            setSlug={setSlug}
            title={title}
            maxLength={50}
          />

          {/* Input image */}
          <BlogImageInput previewImage={preview} setPreviewImage={setPreview} />

          {/* Input category */}
          <CategorySelectionBox
            cateSelectedId={cateSelected}
            cateSelectedName={cateSelectedName}
            setSelectedId={setCateSelected}
            setSelectedName={setCateSelectedName}
          />
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
              <Row $justify="center" $align="center">
                <Loader />
                <Body>Đang xuất bản</Body>
              </Row>
            </CustomButton>
          ) : (
            <CustomButton
              $width="200px"
              onClick={() => handlePublish()}
              $bgColor="#F1DBC4"
            >
              <Body>Xuất bản</Body>
            </CustomButton>
          )}
        </FormFooter>
      </FormContainer>
    </FormWrapper>
  );
};

export default CreateBlog;
