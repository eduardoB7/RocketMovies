import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}
body{
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
    font-family: 'Roboto Slab', serif;
    height: 100vh;
}
`;
