import React from 'react'
import styled from 'styled-components'

interface Props {
  tags: string[]
}

interface Container {}

const Container = styled.div<Container>`
  height: 60px;
  display: flex;
  align-items: center;
`

const Tag = styled.h3`
  color: var(--purple-dark);
  margin: 0;
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 1rem;
`

const Separator = styled.h3`
  color: var(--purple-dark);
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 1rem;
  margin: 0 1.5rem;

  @media (max-width: 420px) {
    margin: 0 0.5rem;
  }
`

export const TitleTags = ({ tags }: Props) => {
  return (
    <Container>
      {tags.map((tag: string, idx: number) => {
        return (
          <React.Fragment key={tag}>
            <Tag>{tag}</Tag>
            {idx < tags.length - 1 && <Separator>/</Separator>}
          </React.Fragment>
        )
      })}
    </Container>
  )
}
