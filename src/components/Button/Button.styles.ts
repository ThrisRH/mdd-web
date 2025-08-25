import styled from "styled-components";

export const ButtonContainer = styled.button<{$primary: boolean, $height?: string}>`
    width: 100%;
    height: ${props => props.$height || "44px"};
    background-color: ${props => props.$primary ? "#EA8E31": "#F1DBC4"};
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
`

export const Content = styled.p`
    font-family: var(--font-lora),serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
`