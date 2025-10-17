import { FlexContainer } from "@/styles/components/layout/Common.styles";
import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  table-layout: auto;
`;

export const TableHeaderCell = styled.th<{ $topPosition?: string }>`
  position: sticky;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 24px;
  padding: 12px 12px 12px;
  top: ${(props) => (props.$topPosition ? props.$topPosition : "90px")};
  z-index: 9;
  background-color: #ffffff;

  transition: top 0.3s ease;

  &:first-child {
    width: 24px;
    padding-left: 32px;
    vertical-align: middle;
  }
  &:nth-child(2) {
    width: 600px;
    max-width: 600px;
  }
`;

export const IconContainer = styled.div<{ $haveBg?: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 4px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.$haveBg ? "rgba(0,0,0,0.2)" : "transparent"};
  cursor: pointer;
`;

export const TableBodyCell = styled.td`
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: top;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 24px;
  z-index: 1;
  padding: 12px 12px 12px;
  cursor: pointer;

  &:first-child {
    padding-left: 32px;
    height: 100%;
    vertical-align: top;
    cursor: default;
  }
`;

export const ActionContainer = styled.div<{
  $visible: boolean;
}>`
  position: ${(props) => (props.$visible ? "sticky" : "absolute")};
  z-index: 9;
  height: 64px;
  top: 93px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => (props.$visible ? "32px" : "0px 24px")};
  background-color: rgb(52, 73, 82);

  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: ${(props) =>
    props.$visible ? "translateY(0)" : "translateY(-20px)"};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
  transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease,
    padding 0.3s ease;
`;

export const SelectIconContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const RowContainer = styled.tr`
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const TableFlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const ImageContainer = styled.div<{ $height?: string }>`
  position: relative;
  flex-shrink: 0;
  width: 128px;
  height: ${(props) => (props.$height ? props.$height : "64px")};
  border-radius: 8px;
  overflow: hidden;
`;

export const ContentField = styled.div`
  flex: 1;
  overflow: hidden;
  min-width: 0;
`;

export const MainContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

//  Create blogs
export const FormWrapper = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: ${(props) => (props.$height ? props.$height : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 64px 24px;
`;

export const HeaderFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CloseIconContainer = styled.div`
  cursor: pointer;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #c5c5c5 #f1f1f1;
`;

export const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
export const ButtonContainer = styled.div`
  width: 120px;
`;

// Faq & about
export const BodyContainer = styled(FlexContainer)<{ $isPadding?: boolean }>`
  display: flex;
  width: 100%;
  gap: 24px;
  padding: ${(props) => (props.$isPadding ? "24px" : 0)};
`;

export const ContentsGroup = styled.div<{
  $variant: "information" | "action";
  $align?: "flex-start" | "center" | "flex-end";
}>`
  width: ${(props) => (props.$variant === "information" ? "60%" : "300px")};
  gap: ${(props) => (props.$variant === "information" ? "2px" : "16px")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$align || "center"};
`;
