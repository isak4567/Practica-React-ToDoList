import './ItemLista.css';

function ItemLista(props) {
    return (
      <li className={`item-lista ${props.terminado && "item-Lista-terminado"}`}>
        <div onClick={props.onToggle}
        className={`contenedor-tilde-lista ${props.terminado && "tilde-animation"}`}>
          <img className={`${!props.terminado && "ds-none"}`} src={require('./tilde.png')} alt=''/>
        </div>
        <p>{props.texto}</p>
        <span onClick={props.onDelete}>x</span>
      </li>
    );
  }

  export {ItemLista};