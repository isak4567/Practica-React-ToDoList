import './ItemLista.css';
import { IconDelete } from '../IconsLista/iconDelete';
import { IconSuccess } from '../IconsLista/iconSuccess';


function ItemLista(props) {
    return (
      <li className={`item-lista ${props.terminado && "item-Lista-terminado"}`}>

        <div onClick={props.onToggle}
        className={`contenedor-tilde-lista ${props.terminado && "tilde-animation"}`}>
          <IconSuccess onInIt={props.onToggle} mostrar={!props.terminado && "ds-none"}/>
        </div>

        <p>{props.texto}</p>

        <IconDelete onInIt={props.onDelete}/>

      </li>
    );
  }

  export {ItemLista};