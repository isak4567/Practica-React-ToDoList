import './CabezalLista.css'

function CabezalLista(props) {
  if (props.num !== 0) {
    return (
      <h1 className="titulo-Lista">Hay que hacer {props.num} cosas</h1>
    );
  } else {
    return (
      <h1 className="titulo-Lista">No hay nada que hacer.</h1>
    );
  }
}

export {CabezalLista};