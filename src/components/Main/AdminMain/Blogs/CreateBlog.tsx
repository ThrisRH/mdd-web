import React, { useRef, useState } from "react";
import {
  ButtonContainer,
  CloseIconContainer,
  CreateBlogWrapper,
  CreateFormContainer,
  DetailContainer,
  FormFooter,
  HeaderFormContainer,
  IconContainer,
} from "../styles/Page.styles";
import { H5 } from "@/components/Typography/Heading.styles";

import CloseIC from "@/assets/svg/cancel";
import AddImageIC from "@/assets/svg/addimage";
import DropdownIC from "@/assets/svg/arrowdown";
import ReloadIC from "@/assets/svg/Interact/Reload";
import { Body1, Body3 } from "@/components/Typography/Body.styles";
import {
  DropdownInputContainer,
  FormInput,
  FormInputContainer,
  FormNormalInput,
  ImageInput,
  ImageInputContainer,
  ImagePreview,
  LabelContainer,
  LabelImageContainer,
  SelectionContainer,
} from "../styles/Input.styles";
import Button from "@/components/Button/button";
import { toast } from "react-toastify";
import CategorySelectionBox from "../Components/CategorySelectionBox";

const CreateBlog = ({
  setIsCreatePopUpOpen,
}: {
  setIsCreatePopUpOpen: (status: boolean) => void;
}) => {
  const [titleLetter, setTitleLetter] = useState("");
  const [mainContentLetter, setMainContentLetter] = useState("");
  const [isCateSelectionOpen, setIsCateSelectionOpen] = useState(false);

  // Slug
  const [slug, setSlug] = useState("");
  const [slugLetterCounter, setSlugLetterCounter] = useState(0);

  // Slug function
  const handleSlugBlur = () => {
    let formatted = slug
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(formatted);
    setSlugLetterCounter(formatted.length);
  };

  const handleAutoCreateSlug = (title: string) => {
    let formatted = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setSlug(formatted);
    setSlugLetterCounter(formatted.length);
  };

  //   Image
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const handlePublish = async () => {
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
            title: titleLetter,
            mainContent: mainContentLetter,
            slug: slug,
            cover: imageId,
          },
        };

        const postRes = await fetch("http://localhost:1337/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Nếu cần token (private API) thì thêm dòng này:
            // Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
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
    } catch (err: any) {
      toast.error("Có lỗi xảy ra khi đăng bài: " + err.message);
      console.error(err);
    }
  };

  const maxTitleLength = 100;
  const maxMainContentLength = 1000;
  const maxSlugLength = 50;
  return (
    <CreateBlogWrapper>
      <CreateFormContainer>
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
          <FormInputContainer
            $borderColor={
              titleLetter.length > maxTitleLength
                ? "#ad3945"
                : "rgba(0, 0, 0, 0.2)"
            }
          >
            <Body3 $size={12} $color="#979797" $fontWeight="500">
              Tiêu đề (bắt buộc)
            </Body3>
            <FormInput
              onChange={(e) => setTitleLetter(e.target.value)}
              placeholder="Thêm tiêu đề mô tả bài viết của bạn"
              rows={2}
            />
            <Body1 $color="#979797" $fontSize="12px">
              {titleLetter.length} / {maxTitleLength}
            </Body1>
          </FormInputContainer>

          {/* Input main content */}
          <FormInputContainer
            $borderColor={
              mainContentLetter.length > maxMainContentLength
                ? "#ad3945"
                : "rgba(0, 0, 0, 0.2)"
            }
          >
            <Body3 $size={12} $color="#979797" $fontWeight="500">
              Nội dung chính (bắt buộc)
            </Body3>
            <FormInput
              onChange={(e) => setMainContentLetter(e.target.value)}
              placeholder="Thêm tiêu đề mô tả bài viết của bạn"
              $minHeight="100px"
            />
            <Body1 $color="#979797" $fontSize="12px">
              {mainContentLetter.length} / {maxMainContentLength}
            </Body1>
          </FormInputContainer>

          {/* Input sub content */}
          <FormInputContainer
            $borderColor={
              mainContentLetter.length > maxMainContentLength
                ? "#ad3945"
                : "rgba(0, 0, 0, 0.2)"
            }
          >
            <Body3 $size={12} $color="#979797" $fontWeight="500">
              Nội dung bài viết
            </Body3>
            <FormInput
              onChange={(e) => setMainContentLetter(e.target.value)}
              placeholder="Thêm tiêu đề mô tả bài viết của bạn"
              $minHeight="100px"
            />
            <Body1 $color="#979797" $fontSize="12px">
              {mainContentLetter.length} / {maxMainContentLength}
            </Body1>
          </FormInputContainer>

          {/* Input slug of blog */}
          <FormInputContainer
            $borderColor={
              slugLetterCounter > maxSlugLength
                ? "#ad3945"
                : "rgba(0, 0, 0, 0.2)"
            }
          >
            <LabelContainer
              $flexDirection="row"
              $justifyContent="space-between"
            >
              <Body3 $size={12} $color="#979797" $fontWeight="500">
                Tên viết tắt của bài viết (bắt buộc)
              </Body3>
              <IconContainer
                onClick={() => {
                  handleAutoCreateSlug(titleLetter);
                }}
              >
                <ReloadIC />
              </IconContainer>
            </LabelContainer>
            <FormNormalInput
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              onBlur={handleSlugBlur}
              placeholder="Tên viết tắt của bài viết của bạn"
            />
            <Body1 $color="#979797" $fontSize="12px">
              {slugLetterCounter} / {maxSlugLength}
            </Body1>
          </FormInputContainer>

          {/* Input image */}
          <LabelContainer>
            <Body1 $fontSize="18px" $weight={600}>
              Ảnh bìa của bài viết
            </Body1>
            <Body3 $color="#979797" $size={14}>
              Chọn ảnh bìa nổi bật để thu hút sự chú ý của người xem.
            </Body3>
          </LabelContainer>
          <ImageInputContainer>
            <LabelImageContainer htmlFor="file-upload">
              {preview ? (
                <ImagePreview src={preview} alt="upload-image" />
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

          {/* Input category */}
          <SelectionContainer>
            <LabelContainer>
              <Body1 $fontSize="18px" $weight={600}>
                Chọn danh mục cho bài viết
              </Body1>
              <Body3 $color="#979797" $size={14}>
                Thêm video của bạn vào danh sách phát để sắp xếp nội dung cho
                người xem.
              </Body3>
            </LabelContainer>
            <DropdownInputContainer
              onClick={() => setIsCateSelectionOpen(true)}
            >
              <Body3 $color="#979797">Chọn danh mục</Body3>
              <DropdownIC fill={"#000"} />
            </DropdownInputContainer>
            {isCateSelectionOpen && (
              <CategorySelectionBox
                setIsCateSelectionOpen={setIsCateSelectionOpen}
              />
            )}
          </SelectionContainer>
        </DetailContainer>
        <FormFooter>
          <ButtonContainer>
            <Button onClickFunc={() => handlePublish()}>Xuất bản</Button>
          </ButtonContainer>
        </FormFooter>
      </CreateFormContainer>
    </CreateBlogWrapper>
  );
};

export default CreateBlog;
