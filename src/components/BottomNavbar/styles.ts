import styled from 'styled-components'
import { BottomNavigation } from '@material-ui/core'

export const StyledBottomNavigation = styled(BottomNavigation)`
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: ${props => (props.theme.palette as any).shadow.main} 0px -1px 12px 0px;
    
    @media(min-width: 768px) {
        display: none;
    }

    & i {
        font-size: 20px;
    }

    & .label {
        font-weight: bold !important;
    },
`

export const Label = styled.div`
    font-weight: bold;
    font-size: 11px;
`
