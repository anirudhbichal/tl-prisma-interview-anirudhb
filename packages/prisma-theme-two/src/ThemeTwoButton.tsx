import * as React from 'react'
import PrismaButton from '@tl-prisma/components'
import styled from 'styled-components'

interface TH2ButtonProps {
  label?: string
  onClick?: () => void
  theme?: any
  className?: string
  color?: string
}

const ThemedButton = styled(PrismaButton)<TH2ButtonProps>`
  color: ${(props) => (props.color ? props.color : props.theme.color.sun)};
  background-color: ${(props) => props.theme.color.white};
  border: 1px solid
    ${(props) => (props.color ? props.color : props.theme.color.sun)};
  border-radius: ${(props) => props.theme.visuals.borderRadius};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.md};
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  &.sim-hover,
  &.sim-focus,
  &.hover,
  &.focus {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) =>
      props.color ? props.color : props.theme.color.sun};
  }
  &.sim-disabled,
  &.disabled {
    opacity: ${(props) => props.theme.visuals.opacity.disabled};
    cursor: default;
    pointer-events: none;
  }
`

export const TH2 = (props: TH2ButtonProps) => {
  const { onClick, label, ...rest } = props
  return (
    <ThemedButton
      label={label}
      onClick={onClick}
      className={rest.className}
      {...rest}
    />
  )
}
