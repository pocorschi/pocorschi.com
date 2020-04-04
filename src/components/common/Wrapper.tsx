import * as React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: var(--wrapper-width);
  max-width: var(--max-width);
  z-index: 2;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap);
  margin-top: 3rem;

  @media (max-width: 420px) {
    padding: 0 2rem;
  }
`

interface Props {
  className?: string
}

export const Wrapper: React.FC<Props> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>
