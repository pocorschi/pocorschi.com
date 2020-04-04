import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Background } from './Background'
import { useToggleTheme } from '../context'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => {
  const toggleTheme = useToggleTheme()

  const loadTheme = () => {
    if (window.localStorage.getItem('theme') && window.localStorage.getItem('theme') === 'light') {
      toggleTheme({ type: 'ui:toggle-theme', theme: 'light' })
    } else {
      toggleTheme({ type: 'ui:toggle-theme', theme: 'dark' })
    }
  }

  useEffect(() => {
    loadTheme()
    return () => {}
  }, [])

  return <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
}

export default LayoutRoot
