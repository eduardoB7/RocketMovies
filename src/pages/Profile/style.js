import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "content";

  grid-template-rows: 144px auto;

  > header {
    background: rgba(255, 133, 155, 0.05);
    width: 100%;
    grid-area: header;
    padding: 6.4rem 14.4rem;
  }
`;
