import React from 'react'
import HelloWorld from 'components/HelloWorld'

const App: React.FC = () => (
  <HelloWorld
    productction={process.env.PRODUCTION.toString()}
    name={process.env.NAME}
    version={process.env.VERSION}
  />
)

export default App
