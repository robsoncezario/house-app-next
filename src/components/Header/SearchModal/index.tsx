import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Tooltip } from '@material-ui/core'
import TransitionModal from '../../TransitionModal'

import { StyledIconButton } from '../styles'
import {
  Container
} from './styles'

const SearchModal: React.FC = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const handleSearch = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Tooltip title={t('common:search')}>
        <StyledIconButton onClick={handleSearch}>
          <i className='fad fa-search' />
        </StyledIconButton>
      </Tooltip>

      <TransitionModal open={open} onClose={handleClose}>
        <Container>

        </Container>
      </TransitionModal>
    </>
  )
}

export default SearchModal
