import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
`;
