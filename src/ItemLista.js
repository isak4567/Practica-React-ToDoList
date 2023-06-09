import './ItemLista.css';
import React from 'react';

function ItemLista(props) {

  const [toggleTareas, settoggleTareas] = React.useState(props.terminado);

    return (
      <li className={`item-lista ${toggleTareas && "item-Lista-terminado"}`}>
        <div onClick={()=> settoggleTareas(!toggleTareas)}
        className={`contenedor-tilde-lista ${toggleTareas && "tilde-animation"}`}>
          <img className={`${!toggleTareas && "ds-none"}`} src={require('./tilde.png')} alt=''/>
        </div>
        <p>{props.texto}</p>
        <span onClick={()=> console.log("yghh")}
        >x</span>
      </li>
    );
  }

  export {ItemLista};