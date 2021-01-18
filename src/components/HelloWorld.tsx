import React from 'react'
import styled from 'styled-components'
import Button from '@components/Button'

import { GlobalStyle } from '../styles'

export interface HelloWorldProps {
  productction: string
  name: string
  version: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({ productction, name, version }) => (
  <>
    <GlobalStyle />
    <Title>Hello World</Title>

    <h3>Environmental variables:</h3>
    <p>
      process.env.PRODUCTION: <b>{productction}</b>
    </p>
    <p>
      process.env.NAME: <b>{name}</b>
    </p>
    <p>
      process.env.VERSION: <b>{version}</b>
    </p>
    <p>
      <Button>Normal Button</Button>
    </p>
    <p>
      <Button isLoading={true}>Loading</Button>
    </p>
  </>
)

export default HelloWorld

const Title = styled.h1`
  padding: 1em 0;
  color: #000;
  background-color: #f6f6f6;
`
