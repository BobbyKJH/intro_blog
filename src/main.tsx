/* React */
import ReactDOM from "react-dom/client";
/* React-Router-Dom */
import { BrowserRouter } from "react-router-dom";
/* Component */
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
