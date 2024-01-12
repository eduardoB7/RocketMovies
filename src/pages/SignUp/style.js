import styled from "styled-components";
import backgroundimg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: #ff859b;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  > h2 {
    margin: 48px 0;
    color: var(--White, #f4ede8);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > p {
    color: #cac4cf;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > a {
    cursor: pointer;
    text-decoration: none;
    margin: 12.4rem auto 0 auto;

    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  > button {
    width: 100%;
  }
`;

export const Background = styled.div`
  flex: 1;
  position: relative;
  background: url(${backgroundimg}) no-repeat center center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(28, 27, 30, 0.7);
  }
`;
