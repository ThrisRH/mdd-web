import styled from "styled-components";

export const EditorWrapper = styled.div`
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
