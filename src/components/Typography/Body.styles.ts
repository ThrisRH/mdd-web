"use client";
import styled, { css } from "styled-components";

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

export const CustomBody = styled.p<{
  $fontSize?: string | number;
  $weight?: number | string;
  $color?: string;
  $hoverColor?: string;
  $align?: string;
  $size?: number;
  $whiteSpace?: "normal" | "nowrap";
}>`
  font-size: ${(props) =>
    props.$fontSize
      ? typeof props.$fontSize === "number"
        ? `${props.$fontSize}px`
        : props.$fontSize
      : props.$size
      ? `${props.$size}px`
      : "16px"};
  line-height: 24px;
  font-weight: ${(props) => props.$weight || 400};
  color: ${(props) => props.$color || "#000"};
  text-align: ${(props) => props.$align || "start"};
  text-overflow: ellipsis;
  white-space: ${(props) => (props.$whiteSpace ? props.$whiteSpace : "nowrap")};
  overflow: hidden;
  min-width: 0;

  &:hover {
    color: ${(props) => props.$hoverColor || props.$color || "#000"};
  }

  @media (min-width: 40rem) {
    color: ${(props) => (props.$color ? props.$color : "#000")};
  }
`;

// Typo định dạng
type Variant =
  | "body0"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "body5"
  | "custom";

export const Body = styled.p<{
  $variant?: Variant;
  $color?: string;
  $hoverColor?: string;
  $size?: number | string;
  $weight?: number | string;
  $align?: string;
}>`
  ${({ $variant = "body1", $color, $hoverColor, $size, $weight, $align }) => {
    const variantStyles = {
      body0: css`
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: ${$color || "#000"};
      `,
      body1: css`
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${$color || "#000"};
      `,
      body2: css`
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: ${$color || "#000"};
      `,
      body3: css`
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: ${$color || "#000"};
      `,
      body4: css`
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: ${$align || "start"};
        color: ${$color || "#fff"};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        min-width: 0;

        @media (min-width: 40rem) {
          color: ${$color || "#000"};
        }
      `,

      body5: css`
        font-size: 12px;
        font-weight: 400;
        color: ${$color || "#000"};
      `,

      custom: css`
        font-size: ${typeof $size === "number"
          ? `${$size}px`
          : $size || "16px"};
        font-weight: ${$weight || 400};
        line-height: 24px;
        text-align: ${$align || "start"};
        color: ${$color || "#000"};
      `,
    };

    return css`
      ${variantStyles[$variant]};

      &:hover {
        color: ${$hoverColor || $color || "#000"};
      }
    `;
  }}
`;
