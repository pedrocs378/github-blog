import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { githubApi } from '../../services/githubApi'

import { AuthorCard } from './components/author-card'

import * as S from './styles'

type User = {
  login: string
  name: string
  avatar_url?: string
  html_url: string
  followers: number
  company?: string
  bio?: string
}

type PostData = {
  id: number
  title: string
  number: number
  created_at: string
  body?: string
  normalizedBody?: string
  formattedCreatedAt?: string
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User>()
  const [posts, setPosts] = useState<PostData[]>([])

  useEffect(() => {
    async function loadUser() {
      try {
        const userResponse = await githubApi.get<User>('/users/pedrocs378')
        const postsResponse = await githubApi.get<PostData[]>(
          '/repos/pedrocs378/github-blog/issues',
        )

        const postsData = postsResponse.data.map((post) => {
          const normalizedBody = post.body?.replace(/[^a-zA-Z0-9/,. ]/g, '')

          return {
            ...post,
            normalizedBody,
            formattedCreatedAt: formatDistanceToNow(new Date(post.created_at), {
              locale: ptBR,
              addSuffix: true,
            }),
          }
        })

        setUser(userResponse.data)
        setPosts(postsData)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  return (
    <S.HomeContainer>
      <AuthorCard author={user} isLoading={isLoading} />

      <section>
        <header>
          <div>
            <strong>Publicações</strong>
            <small>
              {posts.length} {posts.length === 1 ? 'publicação' : 'publicações'}
            </small>
          </div>

          <S.SearchInput type="search" placeholder="Buscar conteúdo" />
        </header>

        <S.PostsList>
          {posts.map((post) => {
            return (
              <S.PortCard key={post.id} to={`/post/${post.number}`}>
                <header>
                  <strong>{post.title}</strong>
                  <time dateTime={post.created_at}>
                    {post.formattedCreatedAt}
                  </time>
                </header>

                <p>{post.normalizedBody}</p>
              </S.PortCard>
            )
          })}
        </S.PostsList>
      </section>
    </S.HomeContainer>
  )
}
