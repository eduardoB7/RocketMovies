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

export const Content = styled.div``;