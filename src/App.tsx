/* React-Router-Dom */
import { Route, Routes } from "react-router-dom";
/* Page */
import MainPage from "./page/MainPage";
/* Component */
import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
