import styled from 'styled-components'

export const HeroStyled = styled.main`
  background-color: ${({ theme }) => theme.colors.foreground.base};
  color: ${({ theme }) => theme.colors.background.base};
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .hero-background {
    position: absolute;

    img {
      width: 100%;
      height: 100vh;
    }
  }

  @media screen and (min-width: 750px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
