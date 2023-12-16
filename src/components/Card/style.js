import styled from "styled-components";

export const Container = styled.section`
  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);
  width: 100%;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  > .avaible {
    display: flex;
    gap: 0.6rem;
  }

  > .avaible svg {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
    border-color: ${({ theme }) => theme.COLORS.TITLE_BUTTON};

    path {
      fill: ${({ theme }) =>
        theme.COLORS.TITLE_BUTTON}; /* Estilizando o preenchimento do SVG */
    }
  }

  > span {
    height: 6rem;
    margin: 1.5rem 0;
    color: var(--Gray, #999591);
    font-weight: 400;
    overflow: hidden;
  }
`;
