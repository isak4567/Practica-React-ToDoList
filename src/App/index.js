
import React from 'react';
import { useLocaleStorage } from '../hooks/useLocaleStorage';
import { AppVista } from './AppVista';


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

    <AppVista
    numTareasTerminadas={numTareasTerminadas} 
    searchValue={searchValue} setsSearchValue={setsSearchValue}
    searchList={searchList} toggleTareas={toggleTareas} deleteTareas={deleteTareas}
    />

    </>
  );
}


export default App;
