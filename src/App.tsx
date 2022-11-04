import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import TechPage from "./pages/TechPage";
import StoragePage from "./pages/StoragePage";

import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<TechPage />} />
        <Route path="/" element={<StoragePage />} />
        <Route path="/" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
