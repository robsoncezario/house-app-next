import styled from 'styled-components'
import {
  Button
} from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 435px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    background-color: ${props => props.theme.palette.background.default};
    box-shadow: ${props => (props.theme.palette as any).shadow.main} 0px 0px 12px 0px;
`

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 20px;
    align-self: flex-start;
`

export const RoomsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    & .column {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }

    & .label {
        font-size: 13px;
        font-weight: bold;
        color: ${props => props.theme.palette.text.primary};
    }

    & .divider {
        height: 50px;
        width: 1px;
        background-color: ${props => fade(props.theme.palette.text.primary, 0.2)};
    }
`

export const StyledButton = styled(Button)`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 24px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    background-color: ${props => props.theme.palette.primary.main};
    color: white;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    margin-top: 20px;
    text-transform: capitalize;

    & i {
        font-size: 14px;
        margin-top: 1px;
    }

    &:hover {
        opacity: .8;
        background-color: ${props => props.theme.palette.primary.main};
    }
`
