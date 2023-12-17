import styled from "styled-components";

export const Container = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  background: none;
  color: ${({ theme }) => theme.COLORS.TITLE_BUTTON};
  font-weight: 400;
  text-align: center;

  &:hover {
    filter: brightness(0.9);
  }
`;
