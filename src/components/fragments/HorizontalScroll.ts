import styled from 'styled-components'

export const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: center;
  overflow-x: scroll;

  &::after {
    position: absolute;
    right: 0;
    content: '';
    width: 50px;
    height: 100px;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }

  &::before {
    position: absolute;
    left: 0;
    content: '';
    width: 50px;
    height: 100px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }
`
