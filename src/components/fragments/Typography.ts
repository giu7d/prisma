import styled, { DefaultTheme } from 'styled-components'

interface ITypographyParagraph {
  justify?: boolean
}

export const Typography = {
  Callout: styled.small`
    font-family: ${({ theme }) => theme.font.family.highlight};
    font-weight: 600;
    font-size: 1.25rem;
    opacity: 0.75;
  `,
  Title: styled.h2`
    font-family: ${({ theme }) => theme.font.family.highlight};
    font-weight: 600;
    font-size: 2rem;
  `,
  SubTitle: styled.h2`
    font-family: ${({ theme }) => theme.font.family.highlight};
    font-weight: 600;
    font-size: 1.25rem;
  `,
  Paragraph: styled.p<ITypographyParagraph>`
    font-family: ${({ theme }) => theme.font.family.highlight};
    font-size: 1.5rem;
    text-align: ${({ justify = false }) => (justify ? 'justify' : 'left')};
  `
}
