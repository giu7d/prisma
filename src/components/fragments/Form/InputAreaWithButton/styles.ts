import styled from 'styled-components'

export const InputAreaWithButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
