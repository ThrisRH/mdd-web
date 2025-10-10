import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

//  Text input
export const FormInputContainer = styled.div<{
  $borderColor?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid
    ${(props) =>
      props.$borderColor ? props.$borderColor : "rgba(0, 0, 0, 0.4);"};
  border-radius: 16px;
  gap: 12px;

  &:focus-within {
    outline: 1.5px solid rgba(19, 19, 19, 0.8);
  }
`;

export const FormInput = styled(TextareaAutosize)<{ $minHeight?: string }>`
  outline: none;
  min-height: ${(props) => (props.$minHeight ? props.$minHeight : "64px")};
  width: 100%;
  font-size: 18px;
  resize: none;
  overflow: hidden;
`;

export const FormNormalInput = styled.input<{
  $minHeight?: string;
}>`
  outline: none;
  min-height: ${(props) => (props.$minHeight ? props.$minHeight : "64px")};
  width: 100%;
  font-size: 18px;
  resize: none;
  overflow: hidden;
`;

// Image inout
export const ImageInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
  width: 200px;
  min-height: 100px;
  border: 1px dashed rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    border: 1px dashed rgba(0, 0, 0, 0.6);
  }
`;

export const ImageInput = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;

export const LabelImageContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 6px;
  cursor: pointer;
`;

export const LabelContainer = styled.div<{
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : "column"};
  align-items: ${(props) =>
    props.$alignItems ? props.$alignItems : "flex-start"};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  gap: 2px;
`;

export const ImagePreview = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Dropdown input
export const DropdownInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  width: 200px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;

// Selection box input
export const SelectionBoxContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const SelectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: space-between;
  flex-direction: column;
  box-sizing: border-box;
  gap: 12px;
`;
