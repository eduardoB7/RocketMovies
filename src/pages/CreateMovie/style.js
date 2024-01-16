import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content";

  grid-template-rows: 11.6rem auto;
`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  padding: 4rem 12.3rem;
  overflow-y: auto;

  > h1 {
    color: var(--White, #f4ede8);
    margin: 2.4rem 0 4rem 0;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    > .InfsMovie {
      display: flex;
      gap: 4rem;
    }

    > textarea {
      padding: 19px;
      resize: none;
      width: 100%;
      background: #262529;
      border-radius: 1rem;
      border: 0;

      color: var(--White, #f4ede8);

      &::placeholder {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
      }
    }

    > .Marks {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      > h3 {
        color: var(--Gray, #999591);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
      }

      > section {
        padding: 16px;
        display: flex;
        gap: 4rem;
        width: 100%;
        flex-wrap: wrap;

        border-radius: 8px;
        background: #0d0c0f;
      }
    }
  }

  .Buttons {
    width: 100%;
    gap: 4rem;
    display: flex;

    > button {
      cursor: pointer;
      width: 100%;
      padding: 16px;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border: 0;
      transition: 0.2s;
      border-radius: 1rem;
    }

    > button:hover {
      filter: brightness(1.1);
    }

    .button-add {
      background-color: #ff859b;
      color: #312e38;
    }
    .button-remove {
      color: #ff859b;
      background: #0d0c0f;
    }
  }
`;
