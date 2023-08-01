/** React */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Pate */
import HomePage from "@page/HomePage.tsx";
/** Component */
import SideBar from "@components/common/SideBar.tsx";


const App = () => {
  return (
    <BrowserRouter>
      <SideBar/>

      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
