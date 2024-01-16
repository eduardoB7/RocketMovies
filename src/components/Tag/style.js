import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.BACKGROUND_00};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.PLACEHOLDER}` : "none"};

  > input {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      outline: none;
    }
  }
  > button {
    background: transparent;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.TITLE_BUTTON};
    font-size: 16px;
  }
`;
