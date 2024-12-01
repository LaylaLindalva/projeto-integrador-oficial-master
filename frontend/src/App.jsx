import React from "react";
import Header from "./components/Header.jsx";
import PaginaInicial from "./components/PaginaInicial.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaDoColaborador from "./components/PaginaDoColaborador.jsx";
import RelatorioDeBusca from "./components/RelatorioDeBusca.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<PaginaInicial/>}/>
            <Route path="/paginaDoColaborador" element={<PaginaDoColaborador/>}/>
            <Route path="/relatorioDeBusca" element={<RelatorioDeBusca/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;