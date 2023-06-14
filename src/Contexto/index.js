import React from 'react';
import { useLocaleStorage } from '../hooks/useLocaleStorage';

const listaContexto = React.createContext();

function ProviderLista ({children}) {

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
  const [ bButonAdd, setbButonAdd] = React.useState(false);

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

  // Estado Modal
  const [modalEst, setmodalEst] = React.useState(true);
  
  
  return (
    <listaContexto.Provider value={{
        loading, error,
        numTareasTerminadas, 
        searchValue, setsSearchValue,
        searchList, toggleTareas, deleteTareas,
        agregarTareas,
        bButonAdd ,setbButonAdd,
        modalEst, setmodalEst
    }}>
        {children}
    </listaContexto.Provider>
  );
}


export { listaContexto, ProviderLista };