import styled from 'styled-components';

export const Container = styled.div`
    width: 600px;
    height: 450px;
    border-radius: 4px;
    background-color: ${props => props.theme.palette.background.default};
    box-shadow: ${props => (props.theme.palette as any).shadow.main} 0px 0px 12px 0px;
`;