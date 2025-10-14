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
import { Body1, Body3, CustomBody } from "@/components/Typography/Body.styles";
import { toast } from "react-toastify";
import CategorySelectionBox from "./CreateInputs/CategorySelectionBox";
import BlogSlugInput from "./CreateInputs/BlogSlugInput";
import BlogTitleInput from "./CreateInputs/BlogTitleInput";
import BlogContentInput from "./CreateInputs/BlogContentInput";
import BlogImageInput from "./CreateInputs/BlogImageInput";
import CustomEditor from "./CreateInputs/Editor/CustomEditor";
import TurndownService from "turndown";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";
import { CustomButton } from "@/styles/components/buttons/Button.styles";

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

    console.log(subContentMarkDown);
    try {
      const fileInput = document.getElementById(
        "file-upload"
      ) as HTMLInputElement;
      const file = fileInput?.files?.[0];

      let imageId: number | null = null;

      // upload picture
      if (file) {
        const formData = new FormData();
        formData.append("files", file);

        const uploadRes = await fetch("http://localhost:1337/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          throw new Error("Lỗi khi upload ảnh");
        }

        const uploadJson = await uploadRes.json();
        console.log("Upload response:", uploadJson);

        if (uploadJson && uploadJson[0]?.id) {
          imageId = uploadJson[0].id;
        } else {
          throw new Error("Không thể lấy ID ảnh từ phản hồi của Strapi");
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

        const postRes = await fetch("http://localhost:1337/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogBody),
        });

        const postJson = await postRes.json();

        if (!postRes.ok) {
          console.error("Post failed:", postJson);
          toast.error("Đăng bài thất bại: " + postJson.error?.message);
          return;
        }
      }
      window.location.href = "/adminpanel/myblogs";
    } catch (err: any) {
      toast.error("Có lỗi xảy ra khi đăng bài: " + err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FlexContainer
        $flexDirection="column"
        $width="900px"
        $height="100%"
        $bgColor="#fff"
        $radius={24}
      >
        <HeaderFormContainer>
          <H5 $size={24}>Tạo bài viết mới</H5>
          <CloseIconContainer onClick={() => setIsCreatePopUpOpen(false)}>
            <CloseIC fill={"#000"} />
          </CloseIconContainer>
        </HeaderFormContainer>
        <DetailContainer>
          <Body1 $fontSize="18px" $weight={600}>
            Chi tiết
          </Body1>

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
                <CustomBody>Xuất bản</CustomBody>
              </CustomButton>
            ) : (
              <CustomButton onClick={() => handlePublish()} $bgColor="#F1DBC4">
                <CustomBody>Xuất bản</CustomBody>
              </CustomButton>
            )}
          </ButtonContainer>
        </FormFooter>
      </FlexContainer>
    </FormWrapper>
  );
};

export default CreateBlog;
