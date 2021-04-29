import styled from 'styled-components'

const Base = styled.input`
  display: flex;
  flex: 1;

  padding: 1.5rem;
  border-radius: 1rem;
  height: 54px;
  border: none;

  background-color: ${({ theme }) => theme.colors.foreground.base};
  color: ${({ theme }) => theme.colors.background.base};

  & > ::placeholder {
    border: none;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.background.lighter};
  }
`

export const Input = {
  Base
}
