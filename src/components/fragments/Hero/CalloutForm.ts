import styled from 'styled-components'

export const HeroCalloutForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  justify-content: flex-end;

  h3 {
    font-family: ${({ theme }) => theme.font.family.highlight};
    color: ${({ theme }) => theme.colors.background.base};
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
    font-feature-settings: 'ordn' on;
  }

  @media screen and (min-width: 750px) {
    max-width: 500px;
    align-self: center;
    margin: auto;
  }
`
