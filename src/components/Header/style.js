import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-area: header;
  display: flex;
  padding: 2.4rem 12.3rem;
  align-items: center;
  gap: 6.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK};

  > .Title {
    text-decoration: none;
    cursor: pointer;
    font-family: "Roboto Slab", serif;
    background: none;
    border: none;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.TITLE_BUTTON};
    font-weight: 700;
    font-size: 2.4rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  width: 19.8rem;

  > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: max-content;

    > a {
      > h1 {
        font-size: 1.4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    > button {
      align-self: flex-end;
      border: none;
      width: fit-content;
      background: none;
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
      font-size: 1.4rem;
      font-weight: 400;
      cursor: pointer;
    }
  }

  > img {
    margin-left: 0.9rem;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
