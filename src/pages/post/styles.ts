import styled from 'styled-components'

export const PostContainer = styled.main``

export const PostTitleCard = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue[800]};

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-transform: uppercase;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue[500]};
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: ${({ theme }) => theme.colors.blue[500]};
        transition: border-color 0.2s ease-in-out;
      }
    }
  }

  h1 {
    margin-top: 1.25rem;

    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.blue[100]};
    line-height: ${({ theme }) => theme.lineHeights.sm};
  }

  footer {
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`
