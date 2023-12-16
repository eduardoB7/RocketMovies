import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border: none;
  border-radius: 8px;

  text-align: center;
  height: 4.8rem;
  width: ${({ $width }) => ($width ? "340px" : "207px")}; /* Correção aqui */

  background-color: ${({ theme }) => theme.COLORS.TITLE_BUTTON};
  color: ${({ theme }) => theme.COLORS.DARK};
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  font-size: 1.6rem;

  cursor: pointer;
`;
