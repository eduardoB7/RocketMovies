import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import { Router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
