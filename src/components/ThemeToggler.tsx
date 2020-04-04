import React from 'react'
import { useApp, useToggleTheme } from '../context'

interface Props {}

export const ThemeToggler = ({}: Props) => {
  const { theme } = useApp()
  const toggleTheme = useToggleTheme()
  const handleOnClick = () => {
    if (theme == 'dark') {
      toggleTheme({ type: 'ui:toggle-theme', theme: 'light' })
    } else {
      toggleTheme({ type: 'ui:toggle-theme', theme: 'dark' })
    }
  }
  return (
    <button type="button" onClick={() => handleOnClick()}>
      switch
    </button>
  )
}
