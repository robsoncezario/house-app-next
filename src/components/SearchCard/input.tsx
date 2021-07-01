import React, {
  useState,
  useEffect,
  useRef
} from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import useDebounce from '../../hooks/useDebounce/'

import {
  Container,
  Input,
  Autocomplete,
  AutocompleteContainer,
  Suggestion
} from './input.styles'
import axios from 'axios'

const SearchInput = () => {
  const elRef = useRef(null)
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const debouncedValue = useDebounce(value, 500)
  const [asyncRequesting, setAsyncRequesting] = useState(false)
  const { locale } = useRouter()
  const { t } = useTranslation()

  const handleValueChange = (event) => {
    event.persist()
    setValue(event.target.value)

    if (event.target.value.trim() === '') {
      setSuggestions([])
    }
  }

  const handleClear = (event) => {
    setValue('')
    elRef?.current?.focus()
  }

  const handleDebounce = () => {
    async function fetchResults() {
      try {
        const response = await axios.post('/api/geocoder/search', {
          data: {
            query: debouncedValue,
            language: locale.split('-')[0]
          }
        })
        const result = response.data
        setSuggestions(result.places)
      } catch (err) {
        console.log('deu error') //
      }
    }

    if (debouncedValue.trim() !== '') {
      fetchResults()
    }
  }

  useEffect(handleDebounce, [debouncedValue])

  const onFocus = () => {
    setFocused(true)
  }

  const onBlur = () => {
    setFocused(false)
  }

  const selectSuggestion = (place) => {
    setValue([
      place.name,
      place.city,
      place.administrative,
      place.country
    ].filter((token) => token !== undefined)
      .map(a => a.replaceAll('<em>', '').replaceAll('</em>', ''))
      .join(', '))
  }

  const requestCurrentLocation = async () => {
    if (!asyncRequesting) {
      setAsyncRequesting(true)

      try {
        const response = await axios.post('/api/geocoder/getCurrentLocation', {
          data: {
            language: locale.split('-')[0]
          }
        })
        const { location } = response.data

        if (location !== null) {
          setValue([
            location.name,
            location.city,
            location.administrative,
            location.country
          ].filter((token) => token !== undefined)
            .map(a => a.replaceAll('<em>', '').replaceAll('</em>', ''))
            .join(', '))
        } else {
          setValue(t('common:location_not_found'))
        }
      } catch (err) {
        setValue(t('common:location_not_found'))
      } finally {
        setAsyncRequesting(false)
      }
    }
  }

  return (
    <Container>
      <Input type="text"
        placeholder={t('common:search_placeholder')}
        spellCheck={false}
        value={value}
        onInput={handleValueChange}
        ref={elRef}
        onFocus={onFocus}
        onBlur={onBlur} />
      <i className={`${value.trim() === '' ? 'fad fa-search-location' : 'fad fa-times-circle'} icon-button`}
        onClick={value.trim() !== '' ? handleClear : null} />

      <Autocomplete visible={focused}>
        <AutocompleteContainer>
          {value.trim() === '' && (
            <Suggestion key={'places-suggestion-mycurrent-location'} onPointerDown={requestCurrentLocation}>
              <i className='fad fa-location-circle suggestion-icon' />
              <div className='suggestion-name'>{t('common:my_current_location')}</div>
            </Suggestion>
          )}

          {value.trim() !== '' && suggestions.map((s, index) => (
            <Suggestion key={'places-suggestion-' + index} onPointerDown={() => selectSuggestion(s)}>
              <i className='fad fa-map-marker-alt suggestion-icon' />
              <div className='suggestion-name'>{s.name.replaceAll('<em>', '').replaceAll('</em>', '')}</div>
              <div className='suggestion-address'>{[
                s.city,
                s.administrative,
                s.country
              ].filter((token) => token !== undefined)
                .map(a => a.replaceAll('<em>', '').replaceAll('</em>', ''))
                .join(', ')}</div>
            </Suggestion>
          ))}
        </AutocompleteContainer>
      </Autocomplete>
    </Container>
  )
}

export default SearchInput
