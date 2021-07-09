import React from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import {
  Column,
  Container,
  IllustrationContainer,
  Title,
  Description,
  Button
} from '../styles/pages/Home'
import SearchCard from '../components/SearchCard'

const Home: NextPage = () => {
  const { t } = useTranslation()

  const handleNearby = () => {
    Router.push('/nearby')
  }

  return (
    <Container>
      <IllustrationContainer>
        <Column>
          <Title>{t('home:discover')}</Title>
          <Description>{t('home:find_your_dream_place')}</Description>
          <Button onClick={handleNearby}>{t('home:browse_now')}&nbsp;<i className="far fa-arrow-right" /></Button>
        </Column>

        <SearchCard />
      </IllustrationContainer>
    </Container>
  )
}

export default Home
