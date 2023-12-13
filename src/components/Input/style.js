import styled from "styled-components";

export const Container = styled.div`
  > input {
    background-color: #262529;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: 0;
    border-radius: 1rem;
    padding: 1.9rem 2.4rem;
  }
  &::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }
`;
