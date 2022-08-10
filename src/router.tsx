import { Route, Routes } from 'react-router-dom'

import { AppTemplate } from './templates/app-template'

import { Home } from './pages/home'
import { Post } from './pages/post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppTemplate />}>
        <Route index element={<Home />} />
        <Route path="post/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
