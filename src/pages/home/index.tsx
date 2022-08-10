import { Icons } from '../../components/icons'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <S.AuthorCard>
        <img src="https://github.com/pedrocs378.png" alt="Pedro" />

        <S.AuthorCardInfo>
          <header>
            <strong>Pedor César</strong>
            <a href="https://github.com/pedrocs378">
              Github
              <Icons.ArrowUpRightFromSquare size={12} />
            </a>
          </header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            a adipisci expedita voluptatum maxime.
          </p>
          <footer>
            <div>
              <span>pedrocs378</span>
            </div>
            <div>
              <span>Rocketseat</span>
            </div>
            <div>
              <span>32 seguidores</span>
            </div>
          </footer>
        </S.AuthorCardInfo>
      </S.AuthorCard>
    </S.HomeContainer>
  )
}
