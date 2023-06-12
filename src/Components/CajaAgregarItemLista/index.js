import React from 'react';
import './CajaAgregarItemLista.css';


function CajaAgregarItemLista(props) {

    const [addValueList, setsaddValueList] = React.useState('');

    return (
      <div className={`caja-agregar ${props.bButonAdd? 'entrar-caja' : 'ds-none'}`}>
        <p>Que quieres agregar?</p>
        <input onChange={(event) => {
        setsaddValueList(event.target.value);  
      }} type='text'/>
        <button onClick={ ()=> {
            props.agregarTareas({terminado: false , text: addValueList});
        }}>agregar</button>
      </div>
    );
  }

export {CajaAgregarItemLista};