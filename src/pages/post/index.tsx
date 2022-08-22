import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IconLabel } from '../../components/icon-label'
import { Icons } from '../../components/icons'

import { githubApi } from '../../services/githubApi'

import * as S from './styles'

type PostData = {
  title: string
  html_url: string
  comments: number
  created_at: string
  body?: string
  formattedCreatedAt: string
  user: {
    login: string
  }
}

type Params = {
  postId?: string
}

export function Post() {
  const [post, setPost] = useState<PostData>()

  const { postId } = useParams<Params>()
  const navigate = useNavigate()

  useEffect(() => {
    if (!postId) {
      navigate('/', { replace: true })
      return
    }

    async function loadPost() {
      if (!postId) return

      const response = await githubApi.get<PostData>(
        `/repos/pedrocs378/github-blog/issues/${postId}`,
      )

      const postDate = {
        ...response.data,
        formattedCreatedAt: formatDistanceToNow(
          new Date(response.data.created_at),
          {
            locale: ptBR,
            addSuffix: true,
          },
        ),
      }

      setPost(postDate)
    }

    loadPost()
  }, [navigate, postId])

  return (
    <S.PostContainer>
      <S.PostTitleCard>
        {post && (
          <>
            <header>
              <Link to="/">
                <Icons.ChevronLeft size={12} />
                Voltar
              </Link>

              <a href={post.html_url} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
                <Icons.ArrowUpRightFromSquare size={12} />
              </a>
            </header>

            <h1>{post.title}</h1>

            <footer>
              <IconLabel
                icon={<Icons.Github size={18} />}
                label={post.user.login}
              />
              <IconLabel
                icon={<Icons.CalendarDay size={18} />}
                label={post.formattedCreatedAt}
              />
              <IconLabel
                icon={<Icons.Comment size={18} />}
                label={`${post.comments} comentários`}
              />
            </footer>
          </>
        )}
      </S.PostTitleCard>

      <S.PostContent>
        {post?.body && (
          <ReactMarkdown
            linkTarget="_blank"
            transformLinkUri={(href) => {
              const hasHttp = ['http', 'https'].includes(href)

              return hasHttp ? href : `https://${href}`
            }}
            components={{
              code: ({ inline, className, children, ...rest }) => {
                const match = /language-(\w+)/.exec(className ?? '')

                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag="div"
                    style={darcula}
                  />
                ) : (
                  <code className={className} {...rest}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {post.body}
          </ReactMarkdown>
        )}
      </S.PostContent>
    </S.PostContainer>
  )
}
