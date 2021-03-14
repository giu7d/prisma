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

  .callout-content {
    display: flex;
    flex-direction: column;
    gap: 4rem;

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

    .callout-actions {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }
  }

  @media screen and (min-width: 750px) {
    flex-direction: row;
    max-width: 900px;
    justify-content: center;
    align-items: center;
    gap: 8rem;

    .callout-logo {
      padding: 0;
      min-width: 300px;
    }

    .callout-content {
      h2 {
        font-size: 4rem;
      }

      .callout-actions {
        flex-direction: row;
        align-self: flex-end;
      }
    }
  }
`
