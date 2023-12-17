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

  /* Estilizando a barra de rolagem */
  /* Estilizando a barra */
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
}

/* Estilizando o track (trilha) */
::-webkit-scrollbar-track {
    background: transparent; /* Cor da trilha */
}

/* Estilizando o thumb (a "bolinha" da barra de rolagem) */
::-webkit-scrollbar-thumb {
      border-radius: 8px;
    background: #FF859B; /* Cor da bolinha */
  }


`;
