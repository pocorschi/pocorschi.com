import React from 'react'

import { Wrapper } from '../components/common'
import { RegularLayout } from '../layouts'

import { TextLink } from '../components/common'

const ComponentsPage = () => {
  return (
    <RegularLayout>
      <Wrapper>
        <h2>Components</h2>
        <h1>H1 Heading</h1>
        <h2>H2 Heading</h2>
        <h3>H3 Heading</h3>
        <h4>H4 Heading</h4>
        <h5>H5 Heading</h5>
        <h6>H6 Heading</h6>
        <p>P Paragraph</p>
        <div />
        <TextLink to="/">This is a sample link</TextLink>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
        </ul>
      </Wrapper>
    </RegularLayout>
  )
}

export default ComponentsPage
