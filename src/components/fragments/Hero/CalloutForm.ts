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

export const HeroCalloutFormSubmitted = styled.div`
  display: flex;
  flex: 1;

  padding: 1rem;
  min-height: 54px;
  border-radius: 1rem;
  font-weight: 500;
  font-weight: 500;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) =>
    `linear-gradient(115deg, ${theme.colors.warn.base} 2.03%, ${theme.colors.primary.base} 97.6%);`};
  color: ${({ theme }) => theme.colors.foreground.base};
`
