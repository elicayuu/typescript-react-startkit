import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { ReactComponent as LoadingSvg } from '@images/loading.svg'

interface ButtonProps {
  color?: 'primary' | 'secondary'
  ghost?: boolean
  isLoading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children: ReactNode
}

const Button: FC<ButtonProps> = ({
  color = 'primary',
  ghost,
  isLoading = false,
  onClick,
  children,
}) => {
  return (
    <Root color={color} ghost={ghost} isLoading={isLoading} onClick={onClick && onClick}>
      <Text isLoading={isLoading}>{children}</Text>
      <LoadingWrap isLoading={isLoading}>
        <LoadingSvg width="40px" height="40px" />
      </LoadingWrap>
    </Root>
  )
}

export default Button

const ghostCss = css<ButtonProps>`
  border: 1px solid currentColor;
  background-color: transparent;
  color: var(--${props => props.color});
`

const Text = styled.span<{ isLoading: boolean }>`
  opacity: ${props => (props.isLoading ? 0 : 1)};
  transition: opacity 0.3s ease-out;
`

const Root = styled.button<ButtonProps>`
  position: relative;
  height: 2.8125rem;
  padding: 0 0.8em;
  border: 0;
  background-color: var(--${props => props.color});
  color: #fff;
  font-family: sans-serif;
  font-size: 0.93em;
  white-space: nowrap;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-out;
  fill: currentColor;

  &:hover {
    box-shadow: none;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
  }

  ${props => props.ghost && ghostCss}
`

const LoadingWrap = styled.div<{ isLoading: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
  opacity: ${props => (props.isLoading ? 1 : 0)};
  transition: opacity 0.3s ease-out;

  & > svg {
    width: 100%;
    height: 100%;
  }
`
