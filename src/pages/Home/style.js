import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "content";
  > main {
    flex: 1;
    grid-area: content;
  }
`;
