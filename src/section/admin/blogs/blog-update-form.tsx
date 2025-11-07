"use client";
import React, { useEffect, useState } from "react";
import { DetailContainer, HeaderFormContainer } from "../styles/Page.styles";

import CustomEditor from "./inputs/ck-editor-input";
import { BlogDetails } from "@/types/blog";
import { CustomButton } from "@/component/button/styled";
import { marked } from "marked";
import { Loader } from "../../client/main/loading/styled";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";
import { useRouter } from "next/navigation";

import SaveIC from "@/assets/svg/interact/save-button";
import { WhiteText } from "@/styles/typography";
import { FlexContainer } from "@/styles/layout";
import BlogTitleInput from "./inputs/blog-title-input";
import BlogContentInput from "./inputs/blog-content-input";
import BlogSlugInput from "./inputs/blog-slug-input";
import CategorySelectionBox from "./inputs/category-selection-box";

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
        },
      );

      const result = await response.json();
      if (!response.ok) {
        setErrorMessage(result.error);
      }

      router.replace("/admin-panel/myblogs");
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
          <h1>Chỉnh sửa bài viết</h1>
          {isLoading ? (
            <CustomButton disabled={true} $width="150px">
              <Loader />
              <WhiteText className="body-1">Đang lưu</WhiteText>
            </CustomButton>
          ) : (
            <CustomButton
              $width="fit-content"
              $hoverBgColor="rgba(0,0,0,0.8)"
              onClick={() => handleUpdateBlog(form.documentId)}
            >
              <SaveIC />
              <WhiteText className="body-1">Lưu thay đổi</WhiteText>
            </CustomButton>
          )}
        </HeaderFormContainer>
        <DetailContainer>
          <p className="body-1">Chi tiết</p>

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
      </FlexContainer>
    </FlexContainer>
  );
};

export default UpdateBlog;
