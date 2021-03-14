import styled from 'styled-components'

export const AppBarStyled = styled.header`
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;

  .appbar-logo {
    svg {
      width: 54px;
      path {
        fill: #fff !important;
      }
    }
  }
`
