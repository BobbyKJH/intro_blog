/* React-Router-Dom */
import { Route, Routes } from "react-router-dom";
/* Page */
import MainPage from "./page/MainPage";
/* Component */
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
