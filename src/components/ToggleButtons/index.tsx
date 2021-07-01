import React, { useState } from 'react'
import {
  Container,
  Item
} from './styles'
import { ToggleButtonsProps } from './types'

const ToggleButtons = ({
  suffix,
  data,
  defaultValue,
  onChange
}: ToggleButtonsProps) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(defaultValue ?? null)

  const handleSelect = (index: number) => {
    setCurrentIndex(index)

    if (onChange) {
      onChange(index)
    }
  }

  return (
    <Container>
      {data.map((i, index) => (
        <Item
          key={suffix + '-item-' + index}
          onClick={() => handleSelect(index)}
          isSelected={index === currentIndex}>{i}</Item>
      ))}
    </Container>
  )
}

export default ToggleButtons
