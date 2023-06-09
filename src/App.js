
import React from 'react';
import { CabezalLista } from './CabezalLista';
import { InputSeachLista } from './InputSeachLista';
import { UlLista } from './UlLista';
import { CrearButtonLista } from './CrearButtonLista';
import { ItemLista } from './ItemLista';
import './App.css';

function App() {

  const defaultLista = [
    {terminado: true, text: '!!!!!!!!!'},
    {terminado: false, text: ' text cccccccccccse.'},
    {terminado: false, text: '!!!!!!!!!!!!!!!!!!!!!!!!'},
    {terminado: true, text: ' sueñito'}
  ]

  return (
    
    <>

      <CabezalLista num={4}/>

      <InputSeachLista/>

      <UlLista>
        {defaultLista.map((el)=> <ItemLista key={el.n} texto={el.text} terminado={el.terminado}/>)}
      </UlLista>

      <CrearButtonLista />

      <a  href="https://icons8.com/icon/83145/marca-de-verificación">Marca de verificación</a> icon by <a href="https://icons8.com">Icons8</a>

    </>
  );
}


export default App;
