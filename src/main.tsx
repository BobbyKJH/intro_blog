import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { ResetStyle } from "./style/reset.styled";
import { StyledEngineProvider } from "@mui/styled-engine";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ResetStyle />
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
