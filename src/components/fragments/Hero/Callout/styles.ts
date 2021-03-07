import styled from 'styled-components'

export const CalloutStyled = styled.div`
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  flex: 1 1;
  gap: 4rem;
  padding: 2rem;
  height: 100%;
  width: 100%;

  h1 {
    display: none;
  }

  h2 {
    font-family: ${({ theme }) => theme.font.family.highlight};
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .callout-logo {
    display: flex;
    flex: 1 1;
    padding: 2rem;
    overflow: hidden;

    svg {
      margin: auto;
      height: 100%;
      max-height: 300px;
    }
  }

  .callout-actions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`
