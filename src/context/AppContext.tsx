import React from 'react'
import { AppReducer } from '../reducers'

interface AppContextState {
  theme: string
  audio: boolean
  dispatch?: any
}

interface AppContextDispatch {
  dispatch?: any
}

type Action = { type: 'ui:toggle-theme'; theme: string }

type Dispatch = (action: Action) => void

const initialState = {
  theme: 'light',
  audio: false
}

const AppContextState = React.createContext<AppContextState | undefined>(initialState)
const AppContextDispatch = React.createContext<Dispatch | undefined>(undefined)

const AppContext: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState)
  return (
    <AppContextState.Provider value={state}>
      <AppContextDispatch.Provider value={dispatch}>{children}</AppContextDispatch.Provider>
    </AppContextState.Provider>
  )
}

function useApp() {
  const context = React.useContext(AppContextState)
  if (context === undefined) {
    throw new Error('useApp must be used within a AppContextProvider')
  }
  return context
}

function useToggleTheme() {
  const context = React.useContext(AppContextDispatch)
  if (context === undefined) {
    throw new Error('useToggleTheme must be used within a AppContextProvider')
  }
  return context
}

export { AppContext, AppContextState, AppContextDispatch, useApp, useToggleTheme }
