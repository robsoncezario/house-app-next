import React from 'react'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import {
  Column,
  Container,
  IllustrationContainer,
  Title,
  Description
} from '../styles/pages/Home'
import SearchCard from '../components/SearchCard'

const Home: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <IllustrationContainer>
        <Column>
          <Title>{t('home:discover')}</Title>
          <Description>{t('home:find_your_dream_place')}</Description>
        </Column>

        <SearchCard />
      </IllustrationContainer>
    </Container>
  )
}

export default Home
