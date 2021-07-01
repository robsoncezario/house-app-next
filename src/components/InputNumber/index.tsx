import React, { useState, FC } from 'react'
import {
  Row,
  Display,
  CircleButton
} from './styles'
import { InputNumberProps } from './types'

const InputNumber: React.FC<InputNumberProps> = ({
  max,
  min = 0,
  step = 1,
  defaultValue = 0,
  onChange
}: InputNumberProps) => {
  const [number, setNumber] = useState(defaultValue)

  const handleMinus = () => {
    const v = number - step

    if (v >= min) {
      setNumber(v)

      if (onChange) {
        onChange(v)
      }
    }
  }

  const handlePlus = () => {
    const v = number + step

    if (max === undefined || max <= v) {
      setNumber(v)

      if (onChange) {
        onChange(v)
      }
    }
  }

  return (
    <Row>
      <CircleButton onClick={handleMinus} disabled={number <= min}>-</CircleButton>
      <Display>{number}</Display>
      <CircleButton onClick={handlePlus} disabled={max && number >= max}>+</CircleButton>
    </Row>
  )
}

export default InputNumber
