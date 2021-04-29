import styled from 'styled-components'
import { Button } from '../../../fragments/Button'

export const HeroWrapper = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  margin: 1rem;
  padding: 2rem;
  min-height: calc(100vh - 2 * 1rem);
  max-height: 100%;
  gap: 2rem;

  background-image: url('hero-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 2rem;

  @media screen and (min-width: 750px) {
    margin: 2rem;
    padding: 3rem;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 1fr;
    min-height: calc(100vh - 2 * 2rem);
  }
`

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

export const HeroCallout = styled.form`
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

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > input {
    padding: 1.5rem;
    border-radius: 1rem;
    flex: 1;
    height: 54px;
    border: none;
    background-color: ${({ theme }) => theme.colors.foreground.base};
    color: ${({ theme }) => theme.colors.background.base};
  }

  & > input::placeholder {
    border: none;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.background.lighter};
  }

  @media screen and (min-width: 750px) {
    flex-direction: row;
    gap: 0;
    flex: 1 1;

    & > input {
      border-radius: 1rem 0 0 1rem;
    }

    & > button {
      border-radius: 0 1rem 1rem 0;
    }
  }
`

export const SubmitButton = styled(Button.Base)`
  padding: 1rem;
  height: 54px;
  border-radius: 1rem;
  font-weight: 500;

  background: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.foreground.base};

  &:hover {
    background: linear-gradient(115deg, #f7921e 2.03%, #f5347c 97.6%);
    color: ${({ theme }) => theme.colors.foreground.base};
    opacity: 1;
  }
`
