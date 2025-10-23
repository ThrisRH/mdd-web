"use client";

import React from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import { PostInputProps } from "@/types/post-input";
import { EditorWrapper } from "./styled";

const CustomEditor = ({ value, onChange, maxLength }: PostInputProps) => {
  const cloud = useCKEditorCloud({
    version: "47.0.0",
    premium: true,
  });

  if (cloud.status === "error") return <div>Error!</div>;
  if (cloud.status === "loading") return <div>Loading...</div>;

  const { ClassicEditor, Essentials, Paragraph, Bold, Italic, Heading, List } =
    cloud.CKEditor;

  return (
    <EditorWrapper>
      <CKEditor
        editor={ClassicEditor}
        data={value || ""}
        config={{
          licenseKey: process.env.NEXT_PUBLIC_CKEDITOR_KEY,
          plugins: [Essentials, Paragraph, Bold, Italic, Heading, List],
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "heading",
              "|",
              "bold",
              "italic",
              "strikethrough",
              "|",
              "bulletedList",
              "numberedList",
            ],
          },
        }}
        onChange={(_, editor) => {
          const data = editor.getData();
          if (!maxLength || data.length <= maxLength) {
            onChange?.(data);
          } else {
            editor.setData(data.substring(0, maxLength));
          }
        }}
      />
    </EditorWrapper>
  );
};

export default CustomEditor;
