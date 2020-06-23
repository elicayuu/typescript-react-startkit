import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  body {
    font-family: sans-serif;
  }
  
  :root {
    --primary: #00b8d8;
    --secondary: #5a6169;
  }
`

export const storyGlobalStyle = (storyFn: () => React.ReactNode): React.ReactNode => (
  <StoryWrap>
    <GlobalStyle />
    <StoryContent>{storyFn()}</StoryContent>
  </StoryWrap>
)

const StoryWrap = styled.div`
  padding: 1em;
  background-color: #f6f6f6;
`

const StoryContent = styled.div`
  & > *:not(:last-child) {
    margin-right: 1em;
  }
`
