import './CrearButtonLista.css';
import React from 'react';
import { compListaContexto } from '..';


function CrearButtonLista(props) {
  
  // React.useEffect(()=> {
  //   let cont = document.querySelector('.crear-button-Lista').innerHTML;
  //   console.log(cont);
  // }, []);
  const {bButonAdd, setbButonAdd} = React.useContext(compListaContexto);
  
    return (
      <div className= {`crear-button-Lista ${bButonAdd? 'abrir-crear-button-Lista' : ''}`}
      onClick={() => { 
        if (!bButonAdd) {
          setbButonAdd(true);
        }
      }}
      >
        <p className={`${bButonAdd? 'ds-none' : ''}`}>Crear nueva tarea</p>
        {props.children}
      </div>
    );
  }

export {CrearButtonLista};