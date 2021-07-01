import styled from 'styled-components';
import {
    Drawer,
    IconButton
 } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

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
    height: 70px;
    background: ${props => props.theme.palette.background.default};
    box-shadow: ${props => (props.theme.palette as any).shadow.main} 0px 1px 12px 0px;
    z-index: 1;

    @media(max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const StyledIconButton = styled(IconButton)`
    margin-left: 16px;

    @media(max-width: 768px) {
        margin-left: 5px;
    }

    &:hover {
        background-color: ${props => fade(props.theme.palette.primary.main, 0.1)};
    }

    & i {
        font-size: 18px;
        color: ${props => props.theme.palette.primary.main};
    }
`;

export const StyledDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        background: ${props => props.theme.palette.background.default};
    }
`;

export const Button = styled.div`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    background-color: ${props => props.theme.palette.primary.main};
    color: white;
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;

    &:hover {
        opacity: .8;
    }
`;