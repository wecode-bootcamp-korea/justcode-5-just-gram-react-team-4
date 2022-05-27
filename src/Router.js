import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
// import Signup from "./pages/Signup/Signup";
import Main from "./pages/sungheeKim/Main/Main";
import Login from "./pages/sungheeKim/Login/Login";

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/main" element={<Main />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;