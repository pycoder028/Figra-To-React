import styled from "styled-components";


export const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem 4rem;
`

export const GridThree = styled.div`
    display: grid;
    gap: ${({gap}) => gap || "2rem"};
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: ${({theme}) => theme.smallMobile}) {
        grid-template-columns: 1fr;
    }    

`