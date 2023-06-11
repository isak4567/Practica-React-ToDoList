
import React from 'react';
import { CabezalLista } from './CabezalLista';
import { InputSeachLista } from './InputSeachLista';
import { UlLista } from './UlLista';
import { CrearButtonLista } from './CrearButtonLista';
import { ItemLista } from './ItemLista';
import './App.css';


function App() {

  // Lista Principal 
  const [lista, saveLSLista] = useLocaleStorage('lista', []);

  const numTareasTerminadas = lista.filter((ele) => !(ele.terminado)).length;

  // Lista Buscada
  const [searchValue, setsSearchValue] = React.useState('');
  
  const searchList = lista.filter((elem)=> {
    return elem.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  // Funcion toggle de tareas 
  const toggleTareas = (id) => {
    const cLista = [...lista];
    let indexToggleLista = cLista.findIndex((el)=> id === el.text);
    cLista[indexToggleLista].terminado = !cLista[indexToggleLista].terminado;
    saveLSLista(cLista);
  }

   // Funcion delete de tareas
  const deleteTareas = (id) => {
    const cLista = [...lista];
    let indexToggleLista = cLista.findIndex((el)=> id === el.text);
    cLista.splice(indexToggleLista, 1);
    saveLSLista(cLista);
  }

  
  return (
    
    <>

      <CabezalLista num={numTareasTerminadas}/>

      <InputSeachLista searchValue={searchValue} setsSearchValue={setsSearchValue} />

      <UlLista>
        {searchList.map((el)=> {
        return <ItemLista 
        key={el.text} texto={el.text} 
        terminado={el.terminado}
        onToggle={()=> toggleTareas(el.text)}
        onDelete={()=> deleteTareas(el.text)}
        />;
        })}
      </UlLista>

      <CrearButtonLista />

      <div className='linkIcon'>
        <a href="https://icons8.com/icon/83145/marca-de-verificación">Marca de  verificación</a> icon by <a href="https://icons8.com">Icons8</a>
      </div>

    </>
  );
}


export default App;
