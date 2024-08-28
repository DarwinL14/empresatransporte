import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserContext"; // Importa el proveedor

import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
import RegistroEmpresa from "./pages/auth/Registro_empresa";
import UserContext from "./UserContext";

// cliente
import Index from "./pages/auth/perfil_cliente/Index";
import Camiones from "./pages/auth/perfil_cliente/Camiones";
import Detalle from "./pages/auth/perfil_cliente/Detalle";
// empresa
import Index_e from "./pages/auth/perfil_empresas/Index_e";
import Camiones_e from "./pages/auth/perfil_empresas/Camiones_e";
import CamionDetalle from "./pages/auth/perfil_empresas/CamionDetalle";
import RegistrarCamion from "./pages/auth/perfil_empresas/RegistrarCamion";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>          
          <Route path='/' element = {<Index_e />}/>
          <Route path='Index_e' element = {<Index_e />}/>
          <Route path='Camiones_e' element = {<Camiones_e />}/>
          <Route path='CamionDetalle/:id' element = {<CamionDetalle />}/>
          <Route path='RegistrarCamion' element = {<RegistrarCamion />}/>


          <Route path='Detalle/:id' element = {<Detalle />}/>
          <Route path='Index' element = {<Index />}/>          
          <Route path='Login' element = {<Login />}/>          
          <Route path='Registro' element = {<Registro />}/>          
          <Route path='RegistroEmpresa' element = {<RegistroEmpresa />}/>          
          <Route path='Camiones' element = {<Camiones />}/>
        </Routes> 
      </Router>
      </UserProvider>
  );
}

export default App;
