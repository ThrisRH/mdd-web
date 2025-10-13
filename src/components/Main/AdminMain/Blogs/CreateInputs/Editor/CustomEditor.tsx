"use client";

import React from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import { PostInputProps } from "@/types/post-input";
import { EditorWrapper } from "./CustomEditor.styles";

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
          licenseKey:
            "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjExNzc1OTksImp0aSI6IjUwYmU2NjIzLTgyZTEtNGExYS1hODg4LWRhM2YyMjMxMzZhZCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjEwMDc4NDg4In0.QDpcYg36Z1YH8im9I3UmfBBzK4xRqOwo3iQOKTeeZqKBSBeBLNEzPsPnn5IQyA-4Y5SmkLIwYOIQm-mEUB_rPA",
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
