import './CrearButtonLista.css';
import React from 'react';





function CrearButtonLista(props) {
  
  // React.useEffect(()=> {
  //   let cont = document.querySelector('.crear-button-Lista').innerHTML;
  //   console.log(cont);
  // }, []);
  
    return (
      <div className= {`crear-button-Lista ${props.bButonAdd? 'abrir-crear-button-Lista' : ''}`}
      onClick={() => { 
        if (!props.bButonAdd) {
          props.setButonAdd(true);
        }
      }}
      >
        <p className={`${props.bButonAdd? 'ds-none' : ''}`}>Crear nueva tarea</p>
        {props.children}
      </div>
    );
  }

export {CrearButtonLista};