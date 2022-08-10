import styled from 'styled-components'

import coverImg from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;

  background: url(${coverImg}) no-repeat center;
  display: flex;
  justify-content: center;

  img {
    width: 9.25rem;
    height: 6.125rem;
    margin-top: 4rem;
  }
`
