import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/auth/Index";
import Camiones from "./pages/auth/Camiones";
import Login from "./pages/auth/Login";
import Carga from "./pages/auth/Carga";
import Empresas from "./pages/auth/Empresas";
import Cargocol from "./pages/auth/empresa/Cargocol/Cargocol";
import Cargocol_1 from "./pages/auth/empresa/Cargocol/camiones/camion1";
import Ditransa from "./pages/auth/empresa/Ditransa/Ditransa";
import Ditransa1 from "./pages/auth/empresa/Ditransa/camiones/camion1";

import Index_e from "./pages/auth/perfil_empresas/Index_e";
import Camiones_e from "./pages/auth/perfil_empresas/Camiones_e";

function App() {
  return (

      <Router>
        <Routes>          
          <Route path='/' element = {<Index />}/>
          <Route path='Index_e' element = {<Index_e />}/>
          <Route path='Camiones_e' element = {<Camiones_e />}/>
          <Route path='Carga' element = {<Carga />}/>
          <Route path='Index' element = {<Index />}/>          
          <Route path='Login' element = {<Login />}/>          
          <Route path='Empresas' element = {<Empresas />}/>
          <Route path='Cargocol' element = {<Cargocol />}/>
          <Route path='Cargocol1' element = {<Cargocol_1 />}/>
          <Route path='Ditransa' element = {<Ditransa />}/>
          <Route path='Ditransa1' element = {<Ditransa1 />}/>
          <Route path='Camiones' element = {<Camiones />}/>
          <Route path='Carga' element = {<Carga />}/>
        </Routes> 
      </Router>
  );
}

export default App;
