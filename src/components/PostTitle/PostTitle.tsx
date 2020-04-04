import React from 'react'
import styled from 'styled-components'
import { TitleTags } from './TitleTags'

interface Props {
  title: string
  date: string
  tags: string[]
}

interface Container {}

const Header = styled.div`
  background: var(--yellow);
  width: 100vw;
  height: 30vh;
  border-bottom-right-radius: 20rem;
  position: relative;
  z-index: 0;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: var(--purple);
    border-bottom-right-radius: 20rem;
    z-index: 1;
    top: -60px;
    left: -60px;
  }

  @media (max-width: 420px) {
    border-bottom-right-radius: 8rem;

    &:before {
      border-bottom-right-radius: 8rem;
    }
  }
`

const Container = styled.div<Container>`
  width: var(--wrapper-width);
  max-width: var(--max-width);
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: flex-end;

  h1 {
    max-width: 30vw;
  }
  p {
    font-size: 0.9rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  @media (max-width: 420px) {
    padding: 0 2rem;
    h1 {
      max-width: 70vw;
    }
  }
`

export const PostTitle: React.FC<Props> = ({ title, date, tags }) => {
  return (
    <Header>
      <Container>
        <h1>{title}</h1>
        <p>{date}</p>
        {tags && <TitleTags tags={tags} />}
      </Container>
    </Header>
  )
}
