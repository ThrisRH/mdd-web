"use client";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import styled from "styled-components";

export const BlogCardWrapper = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const Title = styled.h3`
  color: black;
  font-weight: bold;
  font-size: 24px;
`;

export const ImageContainer = styled.div<{
  $variant?:
    | "blog-card"
    | "blog-detail"
    | "avatar"
    | "cmt-avatar"
    | "sidebar-blog-detail"
    | "preview";
}>`
  position: relative;
  border-radius: 16px;

  ${({ $variant }) => {
    switch ($variant) {
      case `blog-card`:
        return `
        width: 100%;
        height: 180px;
        
        @media (min-width: 425px){
          height: 400px
        }
        `;

      case `avatar`:
        return `
        width: 100%;
        max-width: 220px;
        aspect-ratio: 1/1;
        `;

      case `cmt-avatar`:
        return `
        position: relative;
        aspect-ratio: 1 / 1;
        width: 42px;
        height: 42px;
        `;

      case `sidebar-blog-detail`:
        return `
        width: 100%;
        max-width: 220px;
        height:120px;
        `;
      case `preview`:
        return `
        width: 200px;
        max-width: 200px;
        height:100px;
        `;

      default:
        return `
        width: 400px;
        height: 400px
      `;
    }
  }}
`;

export const LineContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
`;
export const Container = styled.div<{ $flex: number }>`
  flex: ${(props) => props.$flex};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const VectorContainer = styled.div<{ $left: boolean }>`
  position: absolute;
  ${({ $left }) => ($left ? "left: -5px" : "right: -5px")};
  ${({ $left }) => ($left ? "" : "transform: rotate(180deg)")}
`;

export const Line = styled.div<{ $width?: number }>`
  background: #000;
  height: 2px;

  ${({ $width }) => ($width ? `width: ${$width}px;` : `flex: 1;`)}
`;
export const Dot = styled.div<{ $color?: string; $scale?: number }>`
  width: ${(props) => `${props.$scale}px` || "6px"};
  height: ${(props) => `${props.$scale}px` || " 6px"};
  border-radius: 100%;
  background: ${(props) => props.$color || "#000"};
`;

// Relative Blog Wrapper in blog detail
export const RelativeBlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  cursor: pointer;
`;

export const RelativeBlogImageContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
