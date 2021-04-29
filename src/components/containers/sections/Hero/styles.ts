import styled from 'styled-components'

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
