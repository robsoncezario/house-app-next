import styled from 'styled-components'

interface ModalProps {
  open?: boolean
}

export const Overlay = styled.div<ModalProps>`
    position: fixed;
    z-index: 9;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.open ? 'rgba(10, 10, 10, 0.3)' : 'transparent'};
    pointer-events: ${props => props.open ? 'all' : 'none'};
    transition: background .3s;
`

export const Wrapper = styled.div<ModalProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 0;
    transition: all 0.3s;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? 1 : 0};
    transform: ${props => props.open ? 'none' : 'translateY(3em)'};
    pointer-events: ${props => props.open ? 'all' : 'none'};
`
