import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import InputNumber from '../InputNumber/'
import {
  Container,
  Title,
  RoomsContainer,
  Button
} from './styles'
import ToggleButtons from '../ToggleButtons'
import SearchInput from './input'
import petPolicyOptions from '../../constants/petPolicyOptions'

const SearchCard = () => {
  const { t } = useTranslation()
  const [rooms, setRooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(0)
  const [parkingSpaces, setParkingSpaces] = useState(0)
  const [petPolicy, setPetPolicy] = useState(0)

  const handleRoomsChange = (value: number) => {
    setRooms(value)
  }

  const handleBathroomsChange = (value: number) => {
    setBathrooms(value)
  }

  const handleParkingSpacesChange = (value: number) => {
    setParkingSpaces(value)
  }

  const handlePetPolicyChange = (value: number) => {
    setPetPolicy(value)
  }

  return (
    <Container>
      <Title>{t('common:search_title')}</Title>

      <SearchInput />

      <RoomsContainer>
        <div className='column'>
          <div className='label'>{t('common:how_many_rooms')}</div>
          <div style={{ marginTop: 10 }}>
            <InputNumber
              defaultValue={1}
              min={1}
              onChange={handleRoomsChange} />
          </div>
        </div>

        <div className='divider' />

        <div className='column'>
          <div className='label' style={{ alignSelf: 'flex-end' }}>{t('common:how_many_bathrooms')}</div>
          <div style={{ marginTop: 10, alignSelf: 'flex-end' }}>
            <InputNumber
              defaultValue={1}
              min={0}
              onChange={handleBathroomsChange} />
          </div>
        </div>
      </RoomsContainer>

      <RoomsContainer>
        <div className='column'>
          <div className='label'>{t('common:how_many_parking_spaces')}</div>
          <div style={{ marginTop: 10 }}>
            <InputNumber
              defaultValue={1}
              min={0}
              onChange={handleParkingSpacesChange} />
          </div>
        </div>

        <div className='divider' />

        <div className='column'>
          <div className='label' style={{ alignSelf: 'flex-end' }}>{t('common:pet_friendly')}</div>
          <div style={{ marginTop: 10, alignSelf: 'flex-end' }}>
            <InputNumber
              defaultValue={1}
              min={0}
              onChange={handleParkingSpacesChange} />
          </div>
        </div>
      </RoomsContainer>

      <RoomsContainer>
        <div className='column' style={{ width: '100%' }}>
          <div className='label'>{t('common:pet_friendly')}</div>
          <div style={{ marginTop: 10 }}>
            <ToggleButtons
              key={'pet-friendly'}
              suffix='pet-friendly'
              data={petPolicyOptions.map(option => t('common:' + option))}
              onChange={handlePetPolicyChange}
              defaultValue={0} />
          </div>
        </div>
      </RoomsContainer>

      <Button>{t('common:search')}</Button>
    </Container>
  )
}

export default SearchCard
