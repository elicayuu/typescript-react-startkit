import React from 'react'
import styled from 'styled-components'

export interface HelloWorldProps {
  productction: string
  name: string
  version: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({ productction, name, version }) => (
  <>
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
  </>
)

export default HelloWorld

const Title = styled.h1`
  padding: 1em 0;
  color: #000;
  background-color: #f6f6f6;
`
