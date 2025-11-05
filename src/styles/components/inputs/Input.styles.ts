import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

//  Text input
export const FormInputContainer = styled.div<{
  $borderColor?: string;
  $maxHeight?: number;
}>`
  display: flex;
  width: 100%;
  max-height: ${(props) => `${props.$maxHeight}px` || "auto"};
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

export const FormInput = styled(TextareaAutosize)<{
  $minHeight?: string;
  $canOverflow?: boolean;
}>`
  outline: none;
  min-height: ${(props) => (props.$minHeight ? props.$minHeight : "64px")};
  width: 100%;
  font-size: 18px;
  resize: none;
  overflow: ${(props) => (props.$canOverflow ? "auto" : "hidden")};
  scrollbar-width: thin;
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
  $padding?: "vertical" | "horizontal" | "none";
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
  padding: ${(props) => {
    switch (props.$padding) {
      case "none":
        return "0px";
      case "vertical":
        return "32px 0px";
      case "vertical":
        return "0px 32px";
      default:
        return "32px";
    }
  }};
`;

export const ImagePreview = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Dropdown input
export const FlexInputContainer = styled.div<{
  $flexDirection?: "row" | "column";
  $align?: string;
  $justify?: string;
  $width?: string;
  $border?: string;
  $borderRadius?: number;
  $gap?: number;
  $padding?: string;
  $haveHover: boolean;
}>`
  width: ${(props) => (props.$width ? props.$width : "200px")};
  display: flex;
  flex-direction: ${(props) =>
    props.$flexDirection ? props.$flexDirection : "row"};
  justify-content: ${(props) =>
    props.$justify ? props.$justify : "space-between"};
  align-items: ${(props) => (props.$align ? props.$align : "center")};
  padding: ${(props) => (props.$padding ? `${props.$padding}px` : "24px")};
  border: ${(props) =>
    props.$border ? props.$border : "1px solid rgba(0, 0, 0, 0.2)"};
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : "16px"};

  gap: ${(props) => (props.$gap ? `${props.$gap}px` : "0px")};

  cursor: pointer;

  ${(props) =>
    props.$haveHover &&
    `
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.6);
    }
  `}
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

export const SelectionWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: space-between;
  flex-direction: column;
  box-sizing: border-box;
  gap: 12px;
`;

export const CateListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  height: 100%;
`;

export const SelectionTitleWrapper = styled.div`
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Box = styled.div`
  padding: 8px 12px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  padding: 4px 0;
  z-index: 10;
`;

export const Item = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const DropdownInputWrapper = styled(FormInputContainer)`
  position: relative;
`;
