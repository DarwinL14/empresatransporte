import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";

// cliente
import Index from "./pages/auth/perfil_cliente/Index";
import Camiones from "./pages/auth/perfil_cliente/Camiones";
import Detalle from "./pages/auth/perfil_cliente/Detalle";
// empresa
import Index_e from "./pages/auth/perfil_empresas/Index_e";
import Camiones_e from "./pages/auth/perfil_empresas/Camiones_e";
import CamionDetalle from "./pages/auth/perfil_empresas/CamionDetalle";

function App() {
  return (

      <Router>
        <Routes>          
          <Route path='/' element = {<Index_e />}/>
          <Route path='Index_e' element = {<Index_e />}/>
          <Route path='Camiones_e' element = {<Camiones_e />}/>
          <Route path='CamionDetalle/:id' element = {<CamionDetalle />}/>

          <Route path='Detalle/:id' element = {<Detalle />}/>
          <Route path='Index' element = {<Index />}/>          
          <Route path='Login' element = {<Login />}/>          
          <Route path='Registro' element = {<Registro />}/>          
          <Route path='Camiones' element = {<Camiones />}/>
        </Routes> 
      </Router>
  );
}

export default App;
