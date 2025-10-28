import { Row } from "@/components/ui/common/styled";
import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
`;

export const NotificationBox = styled.div`
  position: absolute;
  top: 40px;
  right: -100px;
  width: 450px;
  height: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  box-sizing: border-box;
`;

export const BoxTitle = styled.div`
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const NotificationCard = styled(Row)<{ $isRead?: boolean }>`
  padding: 24px;
  cursor: pointer;
  background-color: ${(props) => (props.$isRead ? "transparent" : "#e6e4ff61")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const BellContainer = styled.div`
  display: flex;
  position: relative;
`;

export const DotAlarmAbsolute = styled.div`
  position: absolute;
  right: -2px;
`;
