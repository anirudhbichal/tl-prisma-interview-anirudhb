import * as React from 'react'
import { useStates } from '../hooks/useStates'

interface Props {
  label?: string
  onClick?: () => void
  className?: string
}

export const PrismaButton = (props: Props) => {
  const { onClick, label, className } = props
  const buttonRef = React.createRef<HTMLElement>()
  useStates({ ref: buttonRef })

  return (
    <button ref={buttonRef as any} className={className} onClick={onClick}>
      {label}
    </button>
  )
}
