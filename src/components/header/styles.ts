import styled from 'styled-components'

import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 17.5rem;

  background: url(${coverImg}) no-repeat top center;
  background-size: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 9.25rem;
    height: 6.125rem;
    margin-top: 4rem;
  }
`
