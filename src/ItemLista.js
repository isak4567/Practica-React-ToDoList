import './ItemLista.css';

function ItemLista(props) {
    return (
      <li className={`item-lista ${props.terminado && "item-Lista-terminado"}`}>
        <img className={`${!props.terminado && "ds-none"}`} src={require('./tilde.png')} alt=''/>
        <p>{props.texto}</p>
        <span>x</span>
      </li>
    );
  }

  export {ItemLista};