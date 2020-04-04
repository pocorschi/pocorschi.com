import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const styles = `
  position: relative;
  vertical-align: baseline;

  span {
    display: inline-block;
    font-weight: 600;
  }

  .main {
    color: var(--font-color);
    position: relative;
    z-index: 1;
  }

  .hover {
    color: var(--yellow);
    position: absolute;
    left: 0;
    z-index: 2;
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    transition: clip-path 0.4s var(--easing);
  }

  &:after {
    content: '';
    position: absolute;
    left: -2px;
    right: -2px;
    bottom: -2px;
    height: 2px;
    opacity: 1;
    z-index: 0;
    transform: translate3d(0, 0, 0);
    background-color: var(--yellow);
    transition: transform 0.3s var(--easing), opacity 0.4s var(--easing);
  }

  &:hover {
    .hover {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    &:after {
      opacity: 0;
      transform: translate3d(0, -6px, 0);
    }
  }
`

const A = styled.a`
  ${styles}
`

const StyledLink = styled(props => <Link {...props} />)`
  ${styles}
`

interface Props {
  to: string
  children: ReactNode
}

export const TextLink: React.FC<Props> = ({ to, children }: Props) => {
  if (to.match(/http[s]?/gi)) {
    return (
      <A href={to} target="_blank">
        <span className="main">{children}</span>
        <span className="hover">{children}</span>
      </A>
    )
  }
  return (
    <StyledLink to={to}>
      <span className="main">{children}</span>
      <span className="hover">{children}</span>
    </StyledLink>
  )
}
