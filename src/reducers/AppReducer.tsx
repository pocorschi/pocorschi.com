type Action = { type: 'ui:toggle-theme'; theme: string }

export const AppReducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'ui:toggle-theme':
      document.documentElement.setAttribute('data-theme', action.theme)
      window.localStorage.setItem('theme', action.theme)
      return {
        ...state,
        theme: action.theme
      }
      break
    default:
      throw new Error('Bad Action Type')
  }
}
