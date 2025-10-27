import { Row } from "@/components/ui/common/styled";
import styled from "styled-components";

export const CommentWrapper = styled.div``;
export const CommentCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ReaderDetailContainer = styled(Row)`
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 6px;
  gap: 0px;
  div {
    display: none;
  }

  @media (min-width: 435px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    padding-bottom: 0px;

    div {
      display: flex;
    }
  }
`;
export const DetailInfo = styled.div``;
