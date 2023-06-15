import React from 'react';
import './CajaAgregarItemLista.css';
import { compListaContexto } from '..';


function CajaAgregarItemLista() {

    const [addValueList, setsaddValueList] = React.useState('');
    const {bButonAdd, setbButonAdd, agregarTareas } = React.useContext(compListaContexto);

    return (
      <div className={`caja-agregar ${bButonAdd? 'entrar-caja' : 'ds-none'}`}>
        <div className='cont-titulo-caja-agregar'>
          <p className='' >Que quieres agregar?</p>
          <p className='' onClick={() => {setbButonAdd(false)}}>x</p>
        </div>
        <input onChange={(event) => {
        setsaddValueList(event.target.value);  
        }} type='text'/>
        <button onClick={ ()=> {
            agregarTareas({terminado: false , text: addValueList});
        }}>agregar</button>
      </div>
    );
  }

export {CajaAgregarItemLista};