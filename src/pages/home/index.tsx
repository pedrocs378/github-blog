import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
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
  formattedCreatedAt: string
  body?: string
  normalizedBody?: string
}

type PostSearchResult = {
  items: PostData[]
}

function normalizePosts(posts: PostData[]) {
  return posts.map((post) => {
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
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User>()
  const [posts, setPosts] = useState<PostData[]>([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    async function loadDatas() {
      try {
        await loadUser()
        await loadPosts()
      } finally {
        setIsLoading(false)
      }
    }

    loadDatas()
  }, [])

  async function loadUser() {
    const response = await githubApi.get<User>('/users/pedrocs378')
    setUser(response.data)
  }

  async function loadPosts(query?: string) {
    if (query) {
      const response = await githubApi.get<PostSearchResult>(
        `/search/issues?q=${query}+repo:pedrocs378/github-blog`,
      )

      const postsData = normalizePosts(response.data.items)

      setPosts(postsData)
    } else {
      const response = await githubApi.get<PostData[]>(
        '/repos/pedrocs378/github-blog/issues',
      )

      const postsData = normalizePosts(response.data)

      setPosts(postsData)
    }
  }

  function handleChangeSeachText(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }

  async function handleSearchPosts(event: FormEvent) {
    event.preventDefault()

    await loadPosts(searchText)
  }

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

          <form onSubmit={handleSearchPosts}>
            <S.SearchInput
              type="search"
              placeholder="Buscar conteúdo"
              onChange={handleChangeSeachText}
              onAbortCapture={() => console.log('entrou')}
            />
          </form>
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
