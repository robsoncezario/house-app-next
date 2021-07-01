import styled from 'styled-components';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & .icon-button {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        line-height: 18px;
        cursor: pointer;
        color: ${props => props.theme.palette.text.hint};
    }

    &:hover .icon-button,
    &:focus-within .icon-button {
        color: ${props => props.theme.palette.primary.main} !important;
    }

    &:focus-within input::placeholder {
        color: ${props => props.theme.palette.text.primary};
    }

    &:focus-within input {
        box-shadow: ${props => props.theme.palette.primary.main} 0px -1px 12px 0px;
    }
`;

export const Input = styled.input`
    width: 100%; 
    border: none;
    outline: none;
    height: 36px;
    background: ${props => props.theme.palette.background.default};
    box-shadow: ${props => fade((props.theme.palette as any).shadow.main, 0.2)} 0px -1px 12px 0px;
    padding-left: 12px;
    padding-right: 36px;
    border-radius: 6px;
    font-size: 13px;
    line-height: 13px;
    cursor: pointer;
    font-weight: 600;

    &::placeholder {
        color: ${props => props.theme.palette.text.hint};
    }

    &:hover::placeholder,
    &:focus::placeholder {
        color: ${props => props.theme.palette.text.primary};
    }

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.palette.primary.main} 0px -1px 12px 0px;
    }

    &::selection {
        background-color: ${props => fade(props.theme.palette.primary.main, 0.2)};
    }
`;

interface AutocompleteProps {
    visible?: boolean;
}

export const Autocomplete = styled.div<AutocompleteProps>`
    position: absolute;
    width: 100%; 
    top: 46px;
    left: 0;
    z-index: 20;
    display: ${props => props.visible ? 'flex' : 'none'};
`;

export const AutocompleteContainer = styled.div`
    width: 100%; 
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background: ${props => props.theme.palette.background.default};
    box-shadow: ${props => fade((props.theme.palette as any).shadow.main, 0.2)} 0px -1px 12px 0px;
    border-radius: 6px;
`;

export const Suggestion = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.theme.palette.text.primary};
    padding-left: 12px;
    padding-right: 12px;
    cursor: pointer;

    &:first-of-type {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    &:last-of-type {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    &:hover {
        background-color: ${props => fade(props.theme.palette.primary.main, 0.1)};
    }

    & .suggestion-icon {
        font-size: 13px;
        line-height: 13px;
    }

    & .suggestion-name {
        font-size: 12px;
        line-height: 12px;
        font-weight: 600;
        margin-left: 5px;
    }

    & .suggestion-address {
        font-size: 10px;
        font-weight: 500;
        line-height: 10px;
        margin-left: 5px;
        color: ${props => props.theme.palette.text.hint};
    }
`;