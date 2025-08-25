import styled from "styled-components";

export const SearchBarContainer = styled.div`
    width: 100%;
    margin: 0px 16px;
    max-width: 706px;
    min-width: 20px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px
`

export const SearchMainField = styled.div<{$isFocus: boolean}>` 
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    padding: 2px 2px 2px 10px;
    border: 1px solid ${props => props.$isFocus ? "#EA8E31" : "#fff"};
    border-radius: 100px;
    align-items: center;
    gap:12px;
    min-width: 20px;

`

export const Input = styled.input`
    flex:2;
    outline: none;
    background: transparent;
    color: white;
    caret-color: #EA8E31;
    min-width: 20px;
`

export const ButtonSearch = styled.button<{$primary: boolean}>`
    width: fit-content;
    height: 100%;
    background-color: ${props => props.$primary ? "#EA8E31": "#F1DBC4"};
    border-radius: 100px;
    font-weight: bold;
    cursor: pointer;
    font-family: var(--font-lora),serif;
    padding: 0px 16px;
`
