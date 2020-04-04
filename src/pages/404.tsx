import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import { IndexLayout } from '../layouts'
import { Wrapper } from '../components/common'

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Wrapper>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Wrapper>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
