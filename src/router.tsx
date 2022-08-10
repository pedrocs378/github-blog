import { Route, Routes } from 'react-router-dom'

import { AppTemplate } from './templates/app-template'

import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppTemplate />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
