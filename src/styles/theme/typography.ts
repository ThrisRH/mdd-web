"use client";
import styled, { css } from "styled-components";

// Types of theme
type Theme = "light" | "dark";

// Typography variants
type TypographyVariant =
  // Headings
  | "h0"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  // Body
  | "body0"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "body5"
  | "custom";

type TypographyProps = {
  $variant?: TypographyVariant;
  $theme?: Theme;
  $color?: string;
  $hoverColor?: string;
  $size?: number;
  $weight?: number | string;
  $align?: "left" | "center" | "right" | "justify";
  $whiteSpace?: "normal" | "nowrap";
};

// default theme color
const themeColors = {
  light: {
    primary: "#000",
    secondary: "#666",
    muted: "#999",
    background: "#fff",
  },
  dark: {
    primary: "#fff",
    secondary: "#ccc",
    muted: "#999",
    background: "#000",
  },
};

// typography
const createVariantStyles = (theme: Theme = "light") => {
  const colors = themeColors[theme];

  return {
    // Headings
    h0: css`
      font-size: 32px;
      line-height: 1.2;
      font-weight: bold;
      font-family: var(--font-lora), serif;
      color: ${colors.primary};

      @media (min-width: 40rem) {
        font-size: 40px;
      }
    `,

    h1: css`
      font-size: 18px;
      line-height: 28px;
      font-weight: bold;
      font-family: var(--font-lora), serif;
      color: ${colors.primary};

      @media (min-width: 680px) {
        font-size: 24px;
      }
    `,

    h2: css`
      font-size: 22px;
      line-height: 1.3;
      font-weight: 600;
      font-family: var(--font-lora), serif;
      color: ${theme === "dark" ? colors.primary : colors.primary};

      @media (min-width: 40rem) {
        color: ${colors.primary};
      }
    `,

    h3: css`
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
      font-family: var(--font-lora), serif;
      color: ${colors.primary};
    `,

    h4: css`
      font-size: 16px;
      line-height: 1.4;
      font-weight: 600;
      font-family: var(--font-lora), serif;
      color: ${colors.primary};
    `,

    h5: css`
      font-size: 16px;
      line-height: 1.4;
      font-weight: bold;
      font-family: var(--font-lora), serif;
      color: ${colors.primary};
    `,

    // Body text variants
    body0: css`
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${colors.primary};

      font-family: var(--font-inter), sans-serif;

      @media (min-width: 425px) {
        font-size: 18px;
      }
    `,

    body1: css`
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      color: ${colors.primary};
      font-family: var(--font-inter), sans-serif;
      @media (min-width: 425px) {
        font-size: 16px;
      }
    `,

    body2: css`
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: ${colors.primary};
      font-family: var(--font-inter), sans-serif;
      @media (min-width: 425px) {
        font-size: 16px;
      }
    `,

    body3: css`
      font-size: 12px;
      font-weight: 500;
      line-height: 24px;
      color: ${colors.primary};
      font-family: var(--font-inter), sans-serif;
      @media (min-width: 425px) {
        font-size: 14px;
      }
    `,

    body4: css`
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
      color: ${theme === "dark" ? colors.primary : colors.primary};
      font-family: var(--font-inter), sans-serif;
      @media (min-width: 425px) {
        color: ${colors.primary};
        font-size: 14px;
      }
    `,

    body5: css`
      font-size: 10px;
      font-weight: 400;
      line-height: 1.5;
      color: ${colors.primary};
      font-family: var(--font-inter), sans-serif;
      @media (min-width: 425px) {
        font-size: 12px;
      }
    `,

    custom: css`
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${colors.primary};

      @media (min-width: 425px) {
        font-size: 18px;
      }
    `,
  };
};

// Main Typography component
const Typography = styled.p<TypographyProps>`
  margin: 0;
  font-family: var(--font-lora), serif;

  // Apply variant styles
  ${({ $variant = "body1", $theme = "light" }) => {
    const variantStyles = createVariantStyles($theme as Theme);
    return variantStyles[$variant];
  }}

  // Override color if provided
  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}
  
  // Override size if provided
  ${({ $size }) =>
    $size &&
    css`
      font-size: ${$size}px !important;
    `}
  
  // Override weight if provided
  ${({ $weight }) =>
    $weight &&
    css`
      font-weight: ${$weight};
    `}
  
  // Text alignment
  ${({ $align = "left" }) => css`
    text-align: ${$align};
  `}
  
  // White space handling
  ${({ $whiteSpace = "normal" }) => css`
    white-space: ${$whiteSpace};
  `}
  
  // Hover effect
  ${({ $hoverColor, $color, $theme = "light" }) => {
    const colors = themeColors[$theme];

    return css`
      &:hover {
        color: ${$hoverColor || $color};
        transition: color 0.2s ease-in-out;
      }
    `;
  }}
`;

// Shortcuts for specific variants
export const Heading = styled(Typography).attrs({ $variant: "h1" })``;
export const Subheading = styled(Typography).attrs({ $variant: "h2" })``;
export const Body = styled(Typography).attrs({ $variant: "body1" })``;
export const Caption = styled(Typography).attrs({ $variant: "body3" })``;
export const ErrorText = styled(Typography).attrs({
  $variant: "body3",
  $color: "#FF0000",
})``;

// Legacy text component for backward compatibility
export const Text = styled(Typography)``;
