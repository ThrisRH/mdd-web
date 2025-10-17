import styled from "styled-components";

export const EditorWrapper = styled.div`
  width: 100%;
  .ck.ck-toolbar {
    border-radius: 16px 16px 0 0 !important;
    border: 1px solid #ccc !important;
    background-color: #fafafa;
  }

  .ck.ck-editor__main > .ck-editor__editable {
    border-radius: 0 0 16px 16px !important;
    border: 1px solid #ccc !important;
    min-height: 200px;
    padding: 12px;
  }

  /* Khi focus vào editor */
  .ck.ck-editor__main > .ck-editor__editable.ck-focused {
    border-color: rgba(0, 0, 0, 0.4) !important;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4) !important;
  }

  .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content {
    border: none !important;
  }

  .ck-editor__editable_inline {
    min-height: 200px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;

    h1 {
      font-size: 2em;
      font-weight: bold;
    }
    h2 {
      font-size: 1.5em;
      font-weight: bold;
    }
    h3 {
      font-size: 1.17em;
      font-weight: bold;
    }
    ul {
      padding-left: 1.5em;
      list-style-type: disc;
    }
    ol {
      padding-left: 1.5em;
      list-style-type: decimal;
    }
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
  }
`;
