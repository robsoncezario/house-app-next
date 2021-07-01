import styled from 'styled-components'
import { fade } from '@material-ui/core/styles/colorManipulator'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        display: none;
    }
`

interface ItemProps {
    isCurrent?: boolean;
}

export const Item = styled.div<ItemProps>`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: ${props => props.isCurrent ? 'bold' : 500};
    background-color: ${props => props.isCurrent ? fade(props.theme.palette.primary.main, 0.1) : 'transparent'};
    color: ${props => props.isCurrent ? props.theme.palette.primary.main : props.theme.palette.text.primary};
    margin-left: 16px;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;

    &:hover {
        background-color: ${props => fade(props.theme.palette.primary.main, 0.1)};
    }
`
