import { Icons } from '../../../../components/icons'

import * as S from './styles'

export function AuthorCard() {
  return (
    <S.AuthorCardContainer>
      <img src="https://github.com/pedrocs378.png" alt="Pedro" />

      <S.AuthorCardDetails>
        <header>
          <strong>Pedor César</strong>
          <a href="https://github.com/pedrocs378">
            Github
            <Icons.ArrowUpRightFromSquare size={12} />
          </a>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate a
          adipisci expedita voluptatum maxime.
        </p>
        <footer>
          <S.AuthorInfoLabel>
            <Icons.Github size={18} />
            <span>pedrocs378</span>
          </S.AuthorInfoLabel>
          <S.AuthorInfoLabel>
            <Icons.Building size={18} />
            <span>Rocketseat</span>
          </S.AuthorInfoLabel>
          <S.AuthorInfoLabel>
            <Icons.UserGroup size={18} />
            <span>32 seguidores</span>
          </S.AuthorInfoLabel>
        </footer>
      </S.AuthorCardDetails>
    </S.AuthorCardContainer>
  )
}
