import React from 'react'

import { RegularLayout } from '../layouts'

import { TextLink } from '../components/common/TextLink'
import styled from 'styled-components'
import { Wrapper } from '../components/common'
import { TitleTags } from '../components/PostTitle/TitleTags'
import { PostTitle } from '../components/PostTitle/PostTitle'

const TitleWrapper = styled.div``

const IndexPage = () => {
  return (
    <RegularLayout>
      <PostTitle title="Things I use" date="4th of April 2020" tags={['software', 'hardware']} />
      <Wrapper>
        <section>
          <p>
            Jumping on the bandwagon and adding my own entry to <TextLink to="https://uses.tech">uses.tech</TextLink>
          </p>
        </section>
        <section>
          <h2>Gear</h2>
          <ul>
            <li>
              <p>
                I currently use a <TextLink to="https://www.apple.com/macbook-pro-16/">2019 16″ MacBook Pro</TextLink>
              </p>
            </li>
            <li>
              <p>
                I do a lot of things on a{' '}
                <TextLink to="https://www.samsung.com/global/galaxy/galaxy-s10/">Samsung Galaxy S10+ Prism White</TextLink>
              </p>
            </li>
            <li>
              <TextLink to="https://www.samsung.com/global/galaxy/galaxy-buds/">Galaxy Buds</TextLink> are great for both podcasts and
              calls. Aura Glow Silver to match the phone.
            </li>
          </ul>
        </section>
        <section>
          <h2>Coding</h2>
          <ul>
            <li>
              <p>
                <TextLink to="https://code.visualstudio.com/">Visual Studio Code</TextLink> is my editor of choice but I couldn't do without{' '}
                <TextLink to="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim">VIM Mode</TextLink>
              </p>
            </li>
            <li>
              <p>
                Obseessively switching themes at random time intervals. Currently on{' '}
                <TextLink to="https://github.com/sdras/night-owl-vscode-theme">Night Owl</TextLink>. Last before that was{' '}
                <TextLink to="https://github.com/jdinhify/vscode-theme-gruvbox">Gruvbox Dark Medium</TextLink>
              </p>
            </li>
            <li>
              <p>Redoing my .dotfiles. Will soon make them public again.</p>
            </li>
          </ul>
        </section>
      </Wrapper>
    </RegularLayout>
  )
}

export default IndexPage
