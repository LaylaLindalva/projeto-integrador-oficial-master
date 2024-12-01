import React from "react";
import { ContainerBusca, ContainerNav, Input, Nav, ImgBuscar, Span, ParteHeader } from "../style/Header.js";
import { Link } from 'react-router-dom'
import ImgBusca from "../image/imgBuscar.png"



const Header = () => {
    return(
        <>
        <Nav>
            <ContainerNav>
              <Link className="link" to="/">HOME</Link> 
              <Span>|</Span>
              <Link className="link" to="/paginaColaborador">PÁGINA DO COLABORADOR</Link> 
              <Span>|</Span>
              <Link className="link" to="/relatorioDeBusca">RELATÓRIO DE BUSCA</Link>
            </ContainerNav>
            <ContainerBusca>
             <Input type="text"/>
             <ImgBuscar src={ImgBusca}/>
            </ContainerBusca>
        </Nav>
        <ParteHeader/>
        </>
    )
}

export default Header;