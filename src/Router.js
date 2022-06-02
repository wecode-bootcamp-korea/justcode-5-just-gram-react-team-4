import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/sungheeKim/Main/Main";
import Login from "./pages/sungheeKim/Login/Login";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />   
            </Routes>
        </BrowserRouter>
    )
}

export default Router;