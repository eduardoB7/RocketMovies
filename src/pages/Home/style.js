import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "content";

  grid-template-rows: 11.6rem auto;

  > main {
    margin: 0 auto;
    flex: 1;
    grid-area: content;
  }
`;
