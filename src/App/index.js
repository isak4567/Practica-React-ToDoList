
import React from 'react';
import { useLocaleStorage } from '../hooks/useLocaleStorage';
import { AppVista } from './AppVista';


function App() {

  // Lista Principal 
  const {
    item: lista, saveItem: saveLSLista, 
    loading, error,
  } = useLocaleStorage('lista', []);

  const numTareasTerminadas = lista.filter((ele) => !(ele.terminado)).length;

  // Lista Buscada
  const [searchValue, setsSearchValue] = React.useState('');
  
  const searchList = lista.filter((elem)=> {
    return elem.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  // Valor para hacer aparecer BotonListaAgregar
  const [ apareceBotonListaAgregar, setApareceBotonListaAgregar] = React.useState(false);

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

   // Funcion agregador de tareas
  const agregarTareas = (item) => {
    const cLista = [...lista];
    cLista.push(item);
    saveLSLista(cLista);
  }
  
  return (
    
    <>

    <AppVista
    loading={loading} error={error}
    numTareasTerminadas={numTareasTerminadas} 
    searchValue={searchValue} setsSearchValue={setsSearchValue}
    searchList={searchList} toggleTareas={toggleTareas} deleteTareas={deleteTareas}
    agregarTareas={agregarTareas} 
    bButonAdd={apareceBotonListaAgregar} setButonAdd={setApareceBotonListaAgregar}
    />

    </>
  );
}


export default App;
