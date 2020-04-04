import React from 'react'
import styled from 'styled-components'

interface Props {}

interface Container {}

const Container = styled.div<Container>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`

const Dark = styled.div`
  position: absolute;
  left: 0;
  top: -20vh;
  right: 0;
  bottom: 0;
  opacity: var(--dark-opacity);
  transition: opacity var(--bg-transition-duration) var(--easing);
  background-color: var(--bg-dark-color);
  background-image: var(--bg-dark-gradient);
`
const Light = styled.div`
  position: absolute;
  left: 0;
  top: -20vh;
  right: 0;
  bottom: 0;
  opacity: var(--light-opacity);
  transition: opacity var(--bg-transition-duration) var(--easing);
  background-color: var(--bg-light-color);
  background-image: var(--bg-light-gradient);
`

export const Background = ({}: Props) => {
  return (
    <Container>
      <Dark />
      <Light />
    </Container>
  )
}
