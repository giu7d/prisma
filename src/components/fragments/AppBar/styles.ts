import styled from 'styled-components'

export const AppBarStyled = styled.header`
  position: relative;
  /* position: fixed; */
  z-index: 99;
  top: 0;
  background-color: ${({ theme }) => theme.colors.background.darker};
  width: 100%;

  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;

  .appbar-logo {
    svg {
      width: 38px;
      path {
        fill: #fff !important;
      }
    }
  }
`
