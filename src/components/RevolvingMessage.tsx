import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { useInterval } from '../hooks'

interface Props {}

interface Container {}

const Container = styled.div<Container>`
  position: absolute;
  display: flex;
  transform: translate3d(0, 300%, 0);

  h2 {
    margin-right: 1rem;
  }
`
const RevolvingContainer = styled.div`
  width: 210px;
  background: var(--yellow);
  height: 54px;
  border-radius: var(--border-radius-medium);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const Action = styled(motion.div)`
  color: var(--purple-dark);
  margin: 0;
  position: absolute;
  font-size: 1.5rem;
  font-weight: 300;
`

const actions = ['code', 'design', 'read', 'overthink', 'am a husband', 'am a father', 'cook']

export const RevolvingMessage = ({}: Props) => {
  const [currentAction, setCurrentAction] = useState<null>(0)

  const inc = (cur: number, length: number) => {
    return (cur + 1) % length
  }

  useInterval(() => {
    setCurrentAction(inc(currentAction, actions.length))
  }, 2000)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <Container>
      <h2>I</h2>
      <RevolvingContainer>
        <AnimatePresence initial={false}>
          {actions.map((text: string, idx: number) => {
            return currentAction === idx ? (
              <Action
                initial={{ y: 50, x: 0, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                exit={{ y: -50, x: 0, opacity: 0 }}
                key={text}
              >
                {text}
              </Action>
            ) : null
          })}
        </AnimatePresence>
      </RevolvingContainer>
    </Container>
  )
}
