import styled from 'styled-components'
import {
  Drawer,
  Button,
  IconButton
} from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    right: 0;
    left: 0;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
    height: 60px;
    background: ${props => props.theme.palette.background.default};
    box-shadow: ${props => (props.theme.palette as any).shadow.main} 0px 1px 12px 0px;
    z-index: 1;

    @media(max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`

export const StyledIconButton = styled(IconButton)`
    margin-left: 16px;
    width: 36px;
    height: 36px;
    color: ${props => props.theme.palette.primary.main};

    @media(max-width: 768px) {
        margin-left: 5px;
    }

    &:hover {
        background-color: ${props => fade(props.theme.palette.primary.main, 0.1)};
    }

    & i {
        font-size: 16px;
    }
`

export const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        background: ${props => props.theme.palette.background.default};
    }
`

export const StyledButton = styled(Button)`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 14px;
    padding-right: 14px;
    border-radius: 18px;
    font-size: 13px;
    font-weight: 600;
    background-color: ${props => props.theme.palette.primary.main};
    color: white;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    text-transform: capitalize;

    & i {
        font-size: 14px;
        margin-right: 5px;
        margin-top: -1px;
    }

    &:hover {
        opacity: .8;
        background-color: ${props => props.theme.palette.primary.main};
    }
`
