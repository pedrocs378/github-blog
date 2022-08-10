import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  > section {
    margin-top: 4.5rem;

    header {
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
          font-size: ${({ theme }) => theme.fontSizes.lg};
          line-height: ${({ theme }) => theme.lineHeights.default};
          color: ${({ theme }) => theme.colors.blue[200]};
        }

        small {
          font-size: ${({ theme }) => theme.fontSizes.sm};
          line-height: ${({ theme }) => theme.lineHeights.default};
          color: ${({ theme }) => theme.colors.blue[300]};
        }
      }
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.colors.blue[600]};
  background-color: ${({ theme }) => theme.colors.blue[900]};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue[400]};
  }
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
  padding-bottom: 2rem;
`

export const PortCard = styled(Link)`
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue[700]};
  border: 2px solid transparent;

  text-decoration: none;
  transition: all 0.2s ease-in-out;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      max-width: 80%;
      font-size: ${({ theme }) => theme.fontSizes.xl};
      line-height: ${({ theme }) => theme.lineHeights.default};
      color: ${({ theme }) => theme.colors.blue[100]};
    }

    time {
      color: ${({ theme }) => theme.colors.blue[300]};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: ${({ theme }) => theme.lineHeights.default};
    }
  }

  p {
    margin-top: 1.25rem;
    line-height: ${({ theme }) => theme.lineHeights.default};
    color: ${({ theme }) => theme.colors.text};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue[400]};
  }
`
