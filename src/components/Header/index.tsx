import React, { useState } from 'react'
import {
  Tooltip,
  ListItem,
  ListItemText
} from '@material-ui/core'
import useTranslation from 'next-translate/useTranslation'

import Logo from '../Logo'
import Navbar from '../Navbar'
import SearchModal from './SearchModal'
import {
  Container,
  Row,
  Button,
  StyledIconButton,
  StyledDrawer
} from './styles'

const Header: React.FC = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Container>
        <Row>
          <Logo />
          <Navbar />
        </Row>

        <Row>
          <Button>{t('common:advertise')}</Button>
          <SearchModal />

          <Tooltip title={t('common:login')}>
            <StyledIconButton onClick={handleDrawer}>
              <i className='fad fa-user' />
            </StyledIconButton>
          </Tooltip>
        </Row>
      </Container>

      <StyledDrawer anchor={'right'} open={open} onClose={handleDrawerClose}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </StyledDrawer>
    </>
  )
}

export default Header
