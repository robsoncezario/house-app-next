import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation';

import { 
  Column,
  Container,
  IllustrationContainer,
  Title,
  Description
} from '../styles/pages/Home'
import SearchCard from '../components/SearchCard';

interface HomeProps {

}

const Home: NextPage<HomeProps> = () => {
  const {t} = useTranslation();

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

Home.getInitialProps = async ({ req }) => {

}  

export default Home