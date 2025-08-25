import styled from "styled-components"

export const H0 = styled.p<{$color?: string}>`
    font-size: 32px;
    line-height: auto;
    font-weight: bold;
    font-family: var(--font-lora),serif;
    color: ${props => props.$color ? props.$color   : "#000"};
    
    @media (min-width: 40rem){
        font-size: 40px;
    }
`
export const H1 = styled.h1<{$color?: string}>`
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
    font-family: var(--font-lora),serif;
    color: ${props => props.$color ? props.$color   : "#000"};
`

export const H2 = styled.h2<{$color?: string}>`
    font-size: 22px;
    line-height: auto;
    font-weight: 600;
    font-family: var(--font-lora),serif;
    color: ${props => props.$color ? props.$color :"#fff"};

    @media (min-width: 40rem) {
        color: ${props => props.$color ? props.$color   : "#000"}; 
    }
`

export const H3 = styled.h3<{$color?: string}>`
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    font-family: var(--font-lora),serif;
    color: ${props => props.$color ? props.$color   : "#000"}
`

export const H4 = styled.h4<{$color?: string}>`
    font-size: 16px;
    line-height: auto;
    font-weight: 600;
    font-family: var(--font-lora),serif;
    color: ${props => props.$color !== "" && props.$color !== null ? props.$color   : "#000"}
`


export const H5 = styled.h5<{$color?: string, $size?: number}>`
    font-size: ${props => props.$size || 40}px;
    line-height: auto;
    font-weight: bold;
    font-family: var(--font-lora),serif;
    color: ${props => props.$color ? props.$color   : "#000"}
`


