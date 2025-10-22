"use client";
import React, { useEffect, useState } from "react";
import { DetailContainer, HeaderFormContainer } from "../styles/Page.styles";
import { H5 } from "@/components/Typography/Heading.styles";

import { Body, Body1, CustomBody } from "@/components/Typography/Body.styles";
import CategorySelectionBox from "./CreateInputs/CategorySelectionBox";
import BlogSlugInput from "./CreateInputs/BlogSlugInput";
import BlogTitleInput from "./CreateInputs/BlogTitleInput";
import BlogContentInput from "./CreateInputs/BlogContentInput";
import CustomEditor from "./CreateInputs/Editor/CustomEditor";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { BlogDetails } from "@/types/blog";
import { CustomButton } from "@/components/ui/button/styled";
import { marked } from "marked";
import { Loader } from "../../Loading.styles";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import { useRouter } from "next/navigation";

import SaveIC from "@/assets/svg/Interact/SaveButton";

interface Props {
  blog: BlogDetails;
}

const UpdateBlog = ({ blog }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState(blog);

  const router = useRouter();

  useState("");

  const handleUpdateBlog = async (documentId: string) => {
    setIsLoading(true);
    try {
      const updatedFields = {
        title: form.title,
        mainContent: form.mainContent,
        subContent: form.subContent,
        slug: form.slug,
        cate: {
          connect: [form.cate?.documentId],
        },
      };

      if (!Object.values(updatedFields).some((v) => v !== "")) {
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `/mmdblogsapi/blogs/${documentId}?populate=*`,
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
      router.replace("/adminpanel/myblogs");
    } catch (error) {
      setErrorMessage("Lỗi server");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  // Xử lý chuyển từ nội dung markdown sang HTML
  const markdownToHTML = async (markdown: string) => {
    return await marked.parse(markdown);
  };

  useEffect(() => {
    const loadHTML = async () => {
      const html = await markdownToHTML(blog.subContent || "");
      setForm((prev) => ({ ...prev, subContent: html }));
    };
    loadHTML();
  }, [blog]);

  return (
    <FlexContainer $flexDirection="row">
      <FlexContainer>
        <HeaderFormContainer>
          <H5 $size={24}>Chỉnh sửa bài viết</H5>
          {isLoading ? (
            <CustomButton $isDisable={true} $bgColor="#aeaeae" $width="150px">
              <Loader />
              <CustomBody $color="#fff" $weight={600}>
                Đang lưu
              </CustomBody>
            </CustomButton>
          ) : (
            <CustomButton
              $width="fit-content"
              $hoverBgColor="rgba(0,0,0,0.8)"
              onClick={() => handleUpdateBlog(form.documentId)}
            >
              <SaveIC />
              <Body $variant="body3" $color="#fff">
                Lưu thay đổi
              </Body>
            </CustomButton>
          )}
        </HeaderFormContainer>
        <DetailContainer>
          <Body1 $fontSize="18px" $weight={600}>
            Chi tiết
          </Body1>

          {/* Input title */}
          <BlogTitleInput
            label="Tiêu đề bài viết"
            isEmpty={errorMessage !== ""}
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e }))}
            setIsEmpty={setErrorMessage}
            maxLength={100}
          />

          {/* Input main content */}
          <BlogContentInput
            label="Nội dung chính của bài viết"
            value={form.mainContent}
            onChange={(e) => setForm((prev) => ({ ...prev, mainContent: e }))}
            maxLength={1000}
          />

          {/* Input sub content */}
          <CustomEditor
            value={form.subContent}
            onChange={(e) => setForm((prev) => ({ ...prev, subContent: e }))}
            maxLength={10000}
          />

          {/* Input slug of blog */}
          <BlogSlugInput
            label="Tên viết tắt của bài viết"
            slug={form.slug}
            setSlug={(e) => setForm((prev) => ({ ...prev, slug: e }))}
            title={form.title}
            maxLength={50}
          />

          {/* Input category */}
          {form.cate && (
            <CategorySelectionBox
              cateSelectedId={form.cate?.documentId || ""}
              cateSelectedName={form.cate?.tile || ""}
              setSelectedId={(id) =>
                setForm((prev) => ({
                  ...prev,
                  cate: {
                    ...(prev.cate || {}),
                    documentId: id,
                  } as CateProps,
                }))
              }
              setSelectedName={(name) =>
                setForm((prev) => ({
                  ...prev,
                  cate: {
                    ...(prev.cate || {}),
                    tile: name,
                  } as CateProps,
                }))
              }
            />
          )}
        </DetailContainer>

        {/* Form footer */}
        {/* <FormFooter>
          {errorMessage !== "" ? (
            <CustomBody $color="#8f4242">{errorMessage}</CustomBody>
          ) : (
            <CustomBody />
          )}
        </FormFooter> */}
      </FlexContainer>
    </FlexContainer>
  );
};

export default UpdateBlog;
