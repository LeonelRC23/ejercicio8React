import { useState } from "react";
import "./App.css";
import TituloFormulario from "./componentes/TituloFormulario";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column mx-auto align-items-center contenedorPrincipal">
          <TituloFormulario />
          <Formulario />
        </div>
      </div>
    </>
  );
}

export default App;
