
import React from 'react';
import { CabezalLista } from './CabezalLista';
import { InputSeachLista } from './InputSeachLista';
import { UlLista } from './UlLista';
import { CrearButtonLista } from './CrearButtonLista';
import { ItemLista } from './ItemLista';
import './App.css';
import { CartelAgregarLista } from './CartelAgregarLista';

const defaultLista = [
  {terminado: true, text: '!!!!!!!!!'},
  {terminado: false, text: ' text cccccccccccse.'},
  {terminado: false, text: '!!!!!!!!!!!!!!!!!!!!!!!!'},
  {terminado: false, text: ' C T.'},
  {terminado: false, text: ' C GG.'},
  {terminado: true, text: ' sueñito'},
  {terminado: false, text: ' ggggg'},
]

function App() {

  const [lista, setlista] = React.useState(defaultLista);

  const numTareasTerminadas = lista.filter((ele) => !(ele.terminado)).length;

  const [searchValue, setsSearchValue] = React.useState('');
  
  const searchList = lista.filter((elem)=> {
    return elem.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });


  return (
    
    <>

      <CabezalLista num={numTareasTerminadas}/>

      <InputSeachLista searchValue={searchValue} setsSearchValue={setsSearchValue} />

      <UlLista>
        {searchList.map((el)=> <ItemLista key={el.text} texto={el.text} terminado={el.terminado}/>)}
      </UlLista>

      <CrearButtonLista />

      <CartelAgregarLista />

      <a  href="https://icons8.com/icon/83145/marca-de-verificación">Marca de verificación</a> icon by <a href="https://icons8.com">Icons8</a>

    </>
  );
}


export default App;
