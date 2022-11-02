import ReactDOM from "react-dom/client";

import App from "./App";

import { ResetStyle } from "./style/reset.styled";

import { StyledEngineProvider } from "@mui/styled-engine";

import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <StyledEngineProvider injectFirst>
      <ResetStyle />
      <App />
    </StyledEngineProvider>
  </RecoilRoot>
);
