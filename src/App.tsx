import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>App</h1>
    </ThemeProvider>
  )
}

export { App }
