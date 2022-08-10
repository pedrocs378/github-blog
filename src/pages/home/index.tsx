import { AuthorCard } from './components/author-card'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <AuthorCard />

      <section>
        <header>
          <div>
            <strong>Publicações</strong>
            <small>6 publicações</small>
          </div>

          <S.SearchInput type="search" placeholder="Buscar conteúdo" />
        </header>

        <S.PostsList>
          <S.PortCard to="#">
            <header>
              <strong>JavaScript data types and data structures</strong>
              <time dateTime="2022-08-10T22:37:21.351Z">Há 1 dia</time>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              dolor, ad ullam dolore fugit cumque quaerat, quisquam
              reprehenderit ducimus, magnam sed maxime animi optio beatae
              expedita exercitationem nostrum aperiam at?
            </p>
          </S.PortCard>
          <S.PortCard to="#">
            <header>
              <strong>JavaScript data types and data structures</strong>
              <time dateTime="2022-08-10T22:37:21.351Z">Há 1 dia</time>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              dolor, ad ullam dolore fugit cumque quaerat, quisquam
              reprehenderit ducimus, magnam sed maxime animi optio beatae
              expedita exercitationem nostrum aperiam at?
            </p>
          </S.PortCard>
          <S.PortCard to="#">
            <header>
              <strong>JavaScript data types and data structures</strong>
              <time dateTime="2022-08-10T22:37:21.351Z">Há 1 dia</time>
            </header>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              dolor, ad ullam dolore fugit cumque quaerat, quisquam
              reprehenderit ducimus, magnam sed maxime animi optio beatae
              expedita exercitationem nostrum aperiam at?
            </p>
          </S.PortCard>
        </S.PostsList>
      </section>
    </S.HomeContainer>
  )
}
