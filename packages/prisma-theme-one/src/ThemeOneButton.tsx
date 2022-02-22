import * as React from 'react'
import PrismaButton from '@tl-prisma/components'
import styled from 'styled-components'

interface TH1ButtonProps {
  label?: string
  onClick?: () => void
  theme?: any
  className?: string
  color?: string
  bgColor?: string
  hoverBgColor?: string
}

const ThemedButton = styled(PrismaButton)<TH1ButtonProps>`
  color: ${(props) => (props.color ? props.color : props.theme.color.white)};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.color.azure};
  border: none;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize.md};
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  &.sim-hover,
  &.hover {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) =>
      props.hoverBgColor ? props.hoverBgColor : props.theme.color.cloudBurst};
  }
  &.sim-focus,
  &.focus {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.cloudBurst};
  }
  &.sim-disabled,
  &.disabled {
    opacity: ${(props) => props.theme.visuals.opacity.disabled};
    cursor: default;
    pointer-events: none;
  }
`

export const TH1 = (props: TH1ButtonProps) => {
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
