import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 24px;
`

export const Title = styled.h3`
    color: black;
    font-weight: bold;
    font-size: 24px;
`

export const ImageContainer = styled.div`
    position: relative;
    height: 180px;
    width:100%;
    border-radius: 16px;

    @media (min-width: 40rem) {
        height: 400px;
    }
`

export const TimeArea = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6px;
`


export const LineContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    flex-direction: row;
    position: relative;
`
export const Container = styled.div<{$flex: number}>`
    flex: ${props => props.$flex};
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    gap: 12px;
`

export const VectorContainer = styled.div<{$left: boolean}>`
    position:absolute;
    ${({$left} ) => ($left ? "left: -5px" : "right: -5px")};
    ${({$left} ) => ($left ? "": "transform: rotate(180deg)")}
`

export const Line = styled.div<{ $width?: number }>`
  background: #000;
  height: 2px;

  ${({ $width }) =>
    $width
      ? `width: ${$width}px;`
      : `flex: 1;`}
`;
export const Dot = styled.div`
    width: 6px;
    height: 6px;
    border-radius:100%;
    background: #000;
`


// Small Post card
export const SmallPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width:100%;
    cursor: pointer;
`
