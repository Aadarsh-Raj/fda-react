import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MyFunctions } from "./Store/store.js";

import Sidebar from "./Components/Sidebar";
import HamburgerIcon from "./Components/HamburgerIcon";

import PopulationDataContainer from "./Components/PopulationDataContainer.jsx";
import Home from "./Components/Home.jsx";
import CryptoContainer from "./Components/CryptoContainer.jsx";

function App() {
  const myCtx = MyFunctions();
  console.log(myCtx);
  return (
    <>
        <main className="main-container">
          {!myCtx.sidebarVisible && (
            <HamburgerIcon onClick={myCtx.toggleSidebar} />
          )}
          {myCtx.sidebarVisible && <Sidebar />}
          
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<PopulationDataContainer />} path="/population" />
            <Route element={<CryptoContainer />} path="/crypto" />
          </Routes>
        </main>
    </>
  );
}

export default App;
