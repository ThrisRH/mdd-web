import styled, { css } from "styled-components";

type Variant =
  | "h0"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body1"
  | "body2";

interface TextProps {
  variant?: Variant;
  color?: string;
  size?: number;
  weight?: number;
}

const variantStyles = {
  h0: css`
    font-size: 32px;
    font-weight: bold;
    font-family: var(--font-lora), serif;
    @media (min-width: 40rem) {
      font-size: 40px;
    }
  `,
  h1: css`
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
  `,
  h2: css`
    font-size: 22px;
    font-weight: 600;
  `,
  h3: css`
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  `,
  h4: css`
    font-size: 16px;
    font-weight: 600;
  `,
  h5: css`
    font-size: 14px;
    font-weight: bold;
  `,
  body1: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  body2: css`
    font-size: 14px;
    line-height: 1.5;
  `,
};

export const Text = styled.p<TextProps>`
  margin: 0;
  font-family: var(--font-lora), serif;
  color: ${(props) => props.color || "#000"};
  ${(props) =>
    props.variant ? variantStyles[props.variant] : variantStyles.body1};

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `};

  ${(props) =>
    props.weight &&
    css`
      font-weight: ${props.weight};
    `};
`;
