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

  > main {
    grid-area: content;
    color: white;
    flex: 1;

    > header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3.7rem;
    }

    > h1 {
      font-size: 3.2rem;
      font-weight: 400;
    }
  }
`;
