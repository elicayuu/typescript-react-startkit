import React from 'react'

export interface HelloWorldProps {
  productction: string
  name: string
  version: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({ productction, name, version }) => (
  <>
    <h1>Hello World</h1>

    <hr />

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
