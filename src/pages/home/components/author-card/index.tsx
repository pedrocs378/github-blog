import { IconLabel } from '../../../../components/icon-label'
import { Icons } from '../../../../components/icons'

import * as S from './styles'

export function AuthorCard() {
  return (
    <S.AuthorCardContainer>
      <img src="https://github.com/pedrocs378.png" alt="Pedro" />

      <S.AuthorCardDetails>
        <header>
          <strong>Pedor César</strong>
          <a
            href="https://github.com/pedrocs378"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <Icons.ArrowUpRightFromSquare size={12} />
          </a>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate a
          adipisci expedita voluptatum maxime.
        </p>
        <footer>
          <IconLabel icon={<Icons.Github size={18} />} label="pedrocs378" />
          <IconLabel icon={<Icons.Building size={18} />} label="Rocketseat" />
          <IconLabel
            icon={<Icons.UserGroup size={18} />}
            label="32 seguidores"
          />
        </footer>
      </S.AuthorCardDetails>
    </S.AuthorCardContainer>
  )
}
