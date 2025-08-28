"use client"
import styled from "styled-components"

export const Body1 = styled.span<{$weight?: number,$color?: string}>`
    font-size: 16px;
    line-height: auto;
    font-weight: ${props =>props.$weight || 500};
    color: ${props => props.$color ? props.$color   : "#000"}
`
export const Body2 = styled.p<{$color?: string, $hoverColor?: string, $size?: number}>`
    font-size: ${props => props.$size || 16}px;
    line-height: 24px;
    font-weight: 400;
    color: ${props => props.$color ? props.$color   : "#000"};

    &:hover {
        color: ${(props) => (props.$hoverColor ? props.$hoverColor : "#000")};
    }
`

export const Body3 = styled.p<{$color?: string, $align?: string,}>`
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    text-align: ${props => props.$align ? props.$align : "start"};
    color: ${props => props.$color ? props.$color :"#fff"};

    @media (min-width: 40rem) {
        color: ${props => props.$color ? props.$color   : "#000"}; 
    }
`

