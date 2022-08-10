import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'
import * as S from './styles'

export function AppTemplate() {
  return (
    <>
      <Header />

      <S.Content>
        <Outlet />
      </S.Content>
    </>
  )
}
