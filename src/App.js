import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/auth/Index";
import Camiones from "./pages/auth/Camiones";
import Login from "./pages/auth/Login";
import Header from "./pages/auth/Header";
import Carga from "./pages/auth/Carga";
import Camion1 from "./pages/auth/camion/camion1";
import Footer from "./pages/auth/Footer";


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element = {<Carga />}/>
          <Route path='Login' element = {<Login />}/>
          <Route path='Index' element = {<Index />}/>
          <Route path='Camiones' element = {<Camiones />}/>
          <Route path='Carga' element = {<Carga />}/>
          <Route path='Camion1' element = {<Camion1 />}/>
        </Routes> 
        <Footer />
      </Router>
  );
}

export default App;
