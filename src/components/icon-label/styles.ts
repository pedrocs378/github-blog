import styled from 'styled-components'

export const IconLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.blue[400]};
  }

  span {
    color: ${({ theme }) => theme.colors.blue[300]};
    line-height: ${({ theme }) => theme.lineHeights.default};
  }
`
