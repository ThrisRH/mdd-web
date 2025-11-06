"use client";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

    /* Header */
    .h0, h1, h2, h3, h4, h5 {
        letter-spacing: 0;
        line-height: 1.5;

        font-family: var(--font-lora), serif;
        color: ${theme.colors.black500};
    }

    
    .h0 {
        font-size: 40px !important;
        font-weight: 700 !important;
    }

    h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
    }

    h2 {
        font-size: 22px;
        font-weight: 600;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
    }

    h4 {
        font-size: 16px;
        font-weight: 600;
    }

    h5 {
        font-size: 16px;
        font-weight: 600;
    }

    /* Body */
    body {
        word-spacing: 0;
        line-height: 24px;
        font-weight: 400;

        font-family: var(--font-inter), sans-serif;
        color: ${theme.colors.black500};
    }

    .body-1{
        font-size: 16px;
        font-weight: 500 !important;
    }
    .body-2{
        font-size: 16px;
    }
    .body-3{
        font-size: 14px;
    }

    .h0, h1, h2, h3, h4, h5{
        color: ${theme.colors.black500};
    }

`;
