import styled from 'styled-components'

export const AuthorCardContainer = styled.div`
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue[800]};

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  gap: 2rem;

  > img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const AuthorCardDetails = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      font-weight: bold;
      line-height: 1.3;
      color: ${({ theme }) => theme.colors.blue[100]};
    }

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.blue[500]};
      border-bottom: 1px solid transparent;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        border-color: ${({ theme }) => theme.colors.blue[500]};
        transition: border-color 0.2s ease-in-out;
      }
    }
  }

  > p {
    margin-top: 0.5rem;
    line-height: ${({ theme }) => theme.lineHeights.default};
  }

  footer {
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`
