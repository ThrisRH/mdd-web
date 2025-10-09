import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  table-layout: auto;
`;

export const TableHeaderCell = styled.th`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 24px;
  padding: 12px 12px 12px;

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

export const IconContaner = styled.div`
  cursor: pointer;
`;

export const TableBodyCell = styled.td`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: top;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 24px;
  padding: 12px 12px 12px;
  cursor: pointer;
  &:first-child {
    padding-left: 32px;
    height: 100%;
    vertical-align: middle;
    cursor: default;
  }
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
