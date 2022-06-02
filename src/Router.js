import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import LoginBokyung from "./pages/bokyungKim/Login/Login";
//import MainBokyung from "./pages/bokyungKim/Main/Main";

//import LoginJulie from "./pages/Julie/Login/Login";
//import MainJulie from "./pages/Julie/Main/Main";

import LoginsangbinYim from './pages/sangbinYim/Login/Login' 
import MainsangbinYim from  './pages/sangbinYim/Main/Main'

//import LoginSanghyeon from "./pages/Sanghyeon/Login/Login";
//import MainSanghyeon from "./pages/Sanghyeon/Main/Main";

//import LoginShinhye from "./pages/Shinhye/Login/Login";
//import MainShinhye from "./pages/Shinhye/Main/Main";

//import LoginSunghee from "./pages/Sunghee/Login/Login";
//import MainSunghee from "./pages/Sunghee/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/login-bokyung" element={<LoginBokyung />} />
        <Route path="/main-bokyung" element={<MainBokyung />} />

        <Route path="/login-julie" element={<LoginJulie />} />
        <Route path="/main-julie" element={<MainJulie />} />*/}

        <Route path="/login-sangbin" element={<LoginsangbinYim />} />
        <Route path="/main-sangbin" element={<MainsangbinYim />} />

        {/*<Route path="/login-sanghyeon" element={<LoginSanghyeon />} />
        <Route path="/main-sanghyeon" element={<MainSanghyeon />} />

        <Route path="/login-shinhye" element={<LoginShinhye />} />
        <Route path="/main-shinhye" element={<MainShinhye />} />

        <Route path="/login-sunghee" element={<LoginSunghee />} />
        <Route path="/main-sunghee" element={<MainSunghee />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
