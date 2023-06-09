import './CabezalLista.css'

function CabezalLista(props) {
    return (
      <h1 className="titulo-Lista">hacer {props.num} cosas</h1>
    );
  }

export {CabezalLista};