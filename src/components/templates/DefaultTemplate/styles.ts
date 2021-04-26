import styled from 'styled-components'

export const DefaultTemplateWrapper = styled.div`
  width: 100%;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    gap: 24px;
    margin: 24px;
  }
`
