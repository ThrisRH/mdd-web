"use client";
import styled from "styled-components";

export const Body1 = styled.span<{
  $fontSize?: string;
  $weight?: number;
  $color?: string;
}>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "16px")};
  line-height: auto;
  font-weight: ${(props) => props.$weight || 500};
  color: ${(props) => (props.$color ? props.$color : "#000")};
`;
export const Body2 = styled.p<{
  $color?: string;
  $hoverColor?: string;
  $size?: number;
  $fontWeight?: string;
}>`
  font-size: ${(props) => props.$size || 16}px;
  line-height: 24px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  color: ${(props) => (props.$color ? props.$color : "#000")};

  &:hover {
    color: ${(props) => (props.$hoverColor ? props.$hoverColor : "#000")};
  }
`;

export const Body3 = styled.p<{
  $color?: string;
  $align?: string;
  $size?: number;
  $fontWeight?: string;
}>`
  font-size: ${(props) => props.$size || 14}px;

  line-height: 24px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  text-align: ${(props) => (props.$align ? props.$align : "start")};
  color: ${(props) => (props.$color ? props.$color : "#fff")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  min-width: 0;
  @media (min-width: 40rem) {
    color: ${(props) => (props.$color ? props.$color : "#000")};
  }
`;

export const Body4 = styled.p<{
  $color?: string;
  $align?: string;
  $fontWeight?: string;
  $size?: number;
}>`
  font-size: ${(props) => props.$size || 16}px;
  line-height: 24px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  text-align: ${(props) => (props.$align ? props.$align : "start")};
  color: ${(props) => (props.$color ? props.$color : "#fff")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  min-width: 0;
  @media (min-width: 40rem) {
    color: ${(props) => (props.$color ? props.$color : "#000")};
  }
`;

export const Body5 = styled.p<{
  $color?: string;
  $align?: string;
  $fontWeight?: string;
  $size?: number;
}>`
  font-size: ${(props) => props.$size || 16}px;
  line-height: 24px;
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 400)};
  text-align: ${(props) => (props.$align ? props.$align : "start")};
  color: ${(props) => (props.$color ? props.$color : "#fff")};

  @media (min-width: 40rem) {
    color: ${(props) => (props.$color ? props.$color : "#000")};
  }
`;
