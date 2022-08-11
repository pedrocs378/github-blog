import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'react-loading-skeleton/dist/skeleton.css'

import { Router } from './router'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <SkeletonTheme
          baseColor={defaultTheme.colors.blue[600]}
          highlightColor={defaultTheme.colors.blue[700]}
        >
          <Router />
        </SkeletonTheme>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export { App }
