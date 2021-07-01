import React, {
  useRef,
  useEffect
} from 'react'
import Portal from '../Portal/index'
import {
  Overlay,
  Wrapper
} from './styles'
import { TransitionModalProps } from './types'

const TransitionModal: React.FC<TransitionModalProps> = ({ open, onClose, children }: TransitionModalProps) => {
  const elRef = useRef<any>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (elRef.current && !elRef?.current?.contains(event.target)) {
      onClose()
    }
  }

  const bindEvents = () => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside, true)
    } else {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }

  useEffect(bindEvents, [open])

  return (
    <Portal >
      <Overlay open={open}>
        <Wrapper ref={elRef} open={open}>
          {children}
        </Wrapper>
      </Overlay>
    </Portal>
  )
}

export default TransitionModal
