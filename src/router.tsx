import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "./Pages/sideBar";
// import { contextAuth } from "./common/MALDITOLOGIN/Context";
import { Auth } from "./authenticated/AuthContext";
import { Logon } from "./Pages/Login";


export const AppRouter = () => {
    return (    
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Logon/>} />
                    <Route path="/sidebar" handle={<SideBar/>} />
                </Routes>
        </BrowserRouter>
    );
}