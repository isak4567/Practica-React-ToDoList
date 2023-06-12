import './CrearButtonLista.css';

function CrearButtonLista(props) {
    return (
      <div className='crear-button-Lista'
      onClick={() => { 
        props.setButonAdd(!props.bButonAdd)
      }}
      >
        <p>Crear nueva tarea</p>
        {props.children}
      </div>
    );
  }

export {CrearButtonLista};