import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;
`

export const Icon = styled.i`
    font-size: 25px;
    color: ${props => props.theme.palette.primary.main};
`

export const Name = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-left: 5px;
    color: ${props => props.theme.palette.primary.main};

    @media(max-width: 768px) {
        display: none;
    }
`
