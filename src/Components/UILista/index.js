import './UlLista.css'

function UlLista(props) {
    return (
      <ul className='ul-Lista'>
        {props.children}
      </ul>
    );
  }

export {UlLista};