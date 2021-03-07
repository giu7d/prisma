import styled from 'styled-components'

export const HeroStyled = styled.main`
  background-color: ${({ theme }) => theme.colors.foreground.base};
  color: ${({ theme }) => theme.colors.background.base};
  width: 100vw;
  height: 100vh;

  .hero-background {
    position: absolute;
    width: 100vw;
    overflow: hidden;

    img {
      width: 100vw;
      height: 100vh;
    }
  }
`
