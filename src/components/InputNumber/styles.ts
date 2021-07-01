import styled from 'styled-components';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { CircleButtonProps} from './types';

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Display = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    -webkit-user-select: none;
    -webkit-user-drag: none;
`;

export const CircleButton = styled.div<CircleButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    line-height: 22px;
    font-size: 22px;
    font-weight: 500;
    background: ${props => props.theme.palette.background.default};
    box-shadow: ${props => fade((props.theme.palette as any).shadow.main, 0.2)} 0px -1px 12px 0px;
    pointer-events: ${props => props.disabled ? 'none' : 'all'};
    opacity: ${props => props.disabled ? .7 : 1};
    color: ${props => props.theme.palette.text.hint};
    cursor: pointer;
    -webkit-user-select: none;
    -webkit-user-drag: none;

    &:hover,
    &:focus {
        color: ${props => props.theme.palette.text.primary};
        box-shadow: ${props => props.theme.palette.primary.main} 0px -1px 12px 0px;
    }
`;