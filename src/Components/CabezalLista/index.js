import { compListaContexto } from '..';
import React from 'react';
import './CabezalLista.css'

function CabezalLista() {

  const {numTareasTerminadas} = React.useContext(compListaContexto);

  if (numTareasTerminadas !== 0) {
    return (
      <h1 className="titulo-Lista">Hay que hacer {numTareasTerminadas} cosas</h1>
    );
  } else {
    return (
      <h1 className="titulo-Lista">No hay nada que hacer.</h1>
    );
  }
}

export {CabezalLista};