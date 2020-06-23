import React from 'react'
import { render, screen } from '@testing-library/react'
import HelloWorld from '@components/HelloWorld'

test('should render without crash', () => {
  const testTitleMessage = 'Hello World'
  render(<HelloWorld productction="test" name="test" version="test" />)
  expect(screen.queryByText(testTitleMessage)).toBeTruthy()
})
