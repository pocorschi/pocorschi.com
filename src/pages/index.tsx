import * as React from 'react'
import styled from 'styled-components'

// import Page from '../components/Page'
import { Wrapper } from '../components/common'
import { IndexLayout } from '../layouts'
import { RevolvingMessage } from '../components/RevolvingMessage'

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  h1 {
    font-size: 4.4rem;
    line-height: 5rem;
    margin: 0;
  }

  h4 {
    margin: 0;
    font-weight: 300;
  }
`

const IndexPage = () => (
  <IndexLayout>
    <Wrapper>
      <HeroContainer>
        <h1>Hi</h1>
        <h4>I'm Mihai</h4>
        <RevolvingMessage />
      </HeroContainer>
    </Wrapper>
  </IndexLayout>
)

export default IndexPage
