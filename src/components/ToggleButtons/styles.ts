import styled from 'styled-components'
import { fade } from '@material-ui/core/styles/colorManipulator'
import {
  ItemProps
} from './types'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding-left: 4px;
    padding-right: 4px;
    box-shadow: ${props => fade((props.theme.palette as any).shadow.main, 0.2)} 0px -1px 12px 0px;
    border-radius: 100px;
`

export const Item = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 14px;
    font-weight: ${props => props.isSelected ? 'bold' : 500};
    background-color: ${props => props.isSelected ? fade(props.theme.palette.primary.main, 0.1) : 'transparent'};
    color: ${props => props.isSelected ? props.theme.palette.primary.main : props.theme.palette.text.primary};
    border-radius: 100px;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;

    &:hover,
    &:focus {
        background-color: ${props => fade(props.theme.palette.primary.main, 0.1)};
        color: ${props => props.theme.palette.text.primary};
    }
`
