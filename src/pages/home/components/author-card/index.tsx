import Skeleton from 'react-loading-skeleton'

import { IconLabel } from '../../../../components/icon-label'
import { Icons } from '../../../../components/icons'

import * as S from './styles'

type AuthorCardProps = {
  author?: {
    login: string
    name: string
    avatar_url?: string
    html_url: string
    followers: number
    company?: string
    bio?: string
  }
  isLoading?: boolean
}

export function AuthorCard({ author, isLoading = false }: AuthorCardProps) {
  if (!author && !isLoading) {
    return (
      <S.AuthorCardContainer>
        <p>
          Aconteceu algo ao tentar carregar os dados, tente novamente mais tarde
        </p>
      </S.AuthorCardContainer>
    )
  }

  return (
    <S.AuthorCardContainer>
      {isLoading ? (
        <>
          <Skeleton height="148px" width="148px" borderRadius="8px" />

          <S.AuthorCardDetails>
            <Skeleton height="24px" />
            <Skeleton height="52px" style={{ marginTop: '8px' }} />
            <Skeleton height="26px" style={{ marginTop: '24px' }} />
          </S.AuthorCardDetails>
        </>
      ) : (
        <>
          {author?.avatar_url && (
            <img src={author.avatar_url} alt={author.name} />
          )}

          <S.AuthorCardDetails>
            <header>
              <strong>{author?.name}</strong>
              <a
                href={author?.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
                <Icons.ArrowUpRightFromSquare size={12} />
              </a>
            </header>
            <p>{author?.bio}</p>
            <footer>
              <IconLabel
                icon={<Icons.Github size={18} />}
                label={author?.login ?? 'Não disponível'}
              />
              <IconLabel
                icon={<Icons.Building size={18} />}
                label={author?.company ?? 'Não disponível'}
              />
              <IconLabel
                icon={<Icons.UserGroup size={18} />}
                label={
                  author &&
                  `${author.followers} ${
                    author.followers === 1 ? 'seguidor' : 'seguidores'
                  }`
                }
              />
            </footer>
          </S.AuthorCardDetails>
        </>
      )}
    </S.AuthorCardContainer>
  )
}
