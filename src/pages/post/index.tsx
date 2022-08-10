import { Link } from 'react-router-dom'

import { IconLabel } from '../../components/icon-label'
import { Icons } from '../../components/icons'

import * as S from './styles'

export function Post() {
  return (
    <S.PostContainer>
      <S.PostTitleCard>
        <header>
          <Link to="/">
            <Icons.ChevronLeft size={12} />
            Voltar
          </Link>

          <a
            href="https://www.github.com/pedrocs378"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub
            <Icons.ArrowUpRightFromSquare size={12} />
          </a>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <footer>
          <IconLabel icon={<Icons.Github size={18} />} label="pedrocs378" />
          <IconLabel icon={<Icons.CalendarDay size={18} />} label="Há 1 dia" />
          <IconLabel icon={<Icons.Comment size={18} />} label="5 comentários" />
        </footer>
      </S.PostTitleCard>

      <S.PostContent>teste</S.PostContent>
    </S.PostContainer>
  )
}
