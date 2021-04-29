import styled from 'styled-components'

export const HeroLogo = styled.div`
  display: flex;
  flex: 1 1;

  & > svg {
    width: 100%;
    max-width: 200px;
  }

  @media screen and (min-width: 750px) {
    flex: 0 auto;
    align-self: flex-start;

    & > svg {
      max-width: 125px;
    }
  }
`
