import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 12px;
  background-color: #262529;
  border-radius: 8px;
  padding: 1.9rem 1.2rem;

  > input {
    background: transparent;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    /* padding: 12px; */
    border: 0;

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    margin: 0 0 0 1.6rem;
    color: #948f99;
  }
`;
