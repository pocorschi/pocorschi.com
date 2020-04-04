import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple : #492F75;
    --purple-dark: #35294e;
    --yellow: #F9BA1A;
    --dark-font-color: #FFFFFF;
    --light-font-color: #000000;
    --bg-html: var(--yellow);
    --bg-dark-color:var(--purple);
    --bg-light-color: #EBEBEB;
    --font-color: white;
    --light-opacity: 0;
    --dark-opacity: 1;
    --easing: cubic-bezier(.7,0,.3,1);
    --bg-transition-duration: .4s;
    --primary: #7ed6df;
    --max-width: 1284px;
    --border-radius-medium: 12px;
    --border-radius-large: 24px;
    --border-radius-small: 6px;
    --wrapper-width: 90%;
    --body-bg: var(--purple-dark);
    --width-mobile: '420px';
    --box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2),
      0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    --gap: 2rem;
  }

  [data-theme="light"] {
    --font-color: #000000;
    --bg-html: #b6b7a5;
    --dark-opacity: 0;
    --light-opacity: 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;

    color: var(--text-color);
  }

  html::-webkit-scrollbar {
    width: 10px;
    height: 30px;
  }

  html::-webkit-scrollbar-thumb {
    background: var(--yellow);
    border-radius: 30px;
  }

  html::-webkit-scrollbar-track {
      background: var(--purple-dark)
  }

  ::selection {
    color: var(--purple-dark);
    background: var(--yellow);
    box-shadow: inset 1px 1px 1px 2px rgba(0,0,0,0.4);
  }

  html {
    box-sizing: border-box;
    background-color: var(--yellow);
    font-size: 1.1rem;
    font-family: 'Open Sans';

    @media (max-width: 420px) {
      font-size: 1rem;
    }
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    vertical-align: baseline;
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    color: var(--font-color);
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    background: var(--body-bg);
    /* TODO implement image text reveal overscroll */
    overscroll-behavior-y: none;
  }

  a {
    color: var(--yellow);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid var(--yellow);
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid var(--purple-dark);
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: var(--purple);
        }
        tr {
          background-color: var(--purple-dark);
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: var(--font-color);
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-family: 'Josefin Sans';
  }

  h1 {
    margin-top: 0;
    font-size: 2rem;
    margin: .67rem 0;
    line-height: 2.6rem;
    font-weight: 900;
  }

  h2 {
    font-size: 1.5rem;
    margin: .75rem 0;
  }

  h3 {
    font-size: 1.17rem;
    margin: .83 rem 0;
  }

  h4 {
    font-size: 1.1rem;
    margin: 1.12rem 0;
  }

  h5, h6 {
    font-size: .83rem;
    margin: 1.5rem 0;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid var(--yellow);
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    display: inline-block;
    line-height: 1.6rem;
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid var(--yellow);

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

  }

  ul {
    list-style: none;

    li {
      position: relative;
      &:before {
        content: '•';
        color: var(--yellow);
        display: block;
        position: absolute;
        padding-right: 0.5rem;
        transform: translate3d(-100%, 0, 0);
      }
    }
  }

  @media (max-width: 420px) {
    :root{
      --wrapper-width: 100%;
    }

    h1 {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  }
`
