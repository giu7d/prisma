import styled from 'styled-components'

export const AppBarNavigationVerticalStyled = styled.nav`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;

  a {
    font-family: ${({ theme }) => theme.font.family.default};
    text-transform: uppercase;
    font-weight: 600;
  }

  a.nav-opacity {
    font-size: 1rem;
    opacity: 0.5;
  }

  a.nav-current {
    font-size: 1.75rem;
    opacity: 1;
  }
`
