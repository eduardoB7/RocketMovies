import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-areas:
    "header"
    "content";

  grid-template-rows: 11.6rem auto;
`;

export const Content = styled.div`
  width: 100%;
  padding: 5rem 12.3rem;
  overflow-y: auto;
  grid-area: content;

  > main {
    > section {
      margin-top: 2.4rem;
      display: flex;
      align-items: center;
      gap: 1.9rem;

      > .avaible {
        display: flex;
        gap: 0.6rem;
      }

      > .avaible svg {
        width: 2rem;
        height: 2rem;
        flex-shrink: 0;
        border-color: ${({ theme }) => theme.COLORS.TITLE_BUTTON};

        path {
          fill: ${({ theme }) =>
            theme.COLORS.TITLE_BUTTON}; /* Estilizando o preenchimento do SVG */
        }
      }

      > h1 {
        font-size: 3.6rem;
        font-weight: 400;
        color: white;
      }
    }

    > .infs {
      display: flex;

      > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      > span {
        color: #f4ede8;
        text-align: justify;
        font-weight: 400;
      }

      > .date {
        display: flex;
        gap: 8px;
        align-items: center;
        height: 1.6rem;
        color: #f4ede8;
        text-align: justify;
        font-weight: 400;
        > svg {
          path {
            fill: ${({ theme }) =>
              theme.COLORS
                .TITLE_BUTTON}; /* Estilizando o preenchimento do SVG */
          }
        }
      }
    }
    > .sinopse {
      color: #f4ede8;

      text-align: justify;
      font-family: Roboto Slab;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const Tag = styled.div`
  margin: 4rem 0;
  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: 0.5rem 1.6rem;

  color: #e5e5e5;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;
