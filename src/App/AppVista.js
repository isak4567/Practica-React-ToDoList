import React from "react";

import { 
  CabezalLista, 
  InputSeachLista, UlLista, 
  CrearButtonLista, ItemLista,
  CajaAgregarItemLista,
  LoadingLista,
 } 
from "../Components";

import './AppVista.css';
  
    function AppVista({
        loading, error,
        numTareasTerminadas, 
        searchValue, setsSearchValue,
        searchList, toggleTareas, deleteTareas,
        agregarTareas,
        bButonAdd ,setButonAdd
    }) {
        return (
          <>
            <CabezalLista num={numTareasTerminadas}/>
      
            <InputSeachLista searchValue={searchValue} setsSearchValue={setsSearchValue} />
      
            <UlLista>
              {loading && <LoadingLista />}
              {error && <p>Ah ocurrido un error</p>}
              {(!loading && searchList.length === 0) && <p>Agrega cosas que hacer a tu lista</p>}

              {searchList.map((el)=> {
              return <ItemLista 
              key={el.text} texto={el.text} 
              terminado={el.terminado}
              onToggle={()=> toggleTareas(el.text)}
              onDelete={()=> deleteTareas(el.text)}
              />;
              })}
            </UlLista>

            {!loading && 
            <CrearButtonLista setButonAdd={setButonAdd} bButonAdd={bButonAdd}>
              <CajaAgregarItemLista 
              agregarTareas={agregarTareas} 
              setButonAdd={setButonAdd} bButonAdd={bButonAdd} />
            </CrearButtonLista>
            }
            
            <div className='linkIcon'>
              <a href="https://icons8.com/icon/83145/marca-de-verificación">Marca de  verificación</a> icon by <a href="https://icons8.com">Icons8</a>
            </div>
          </>
        );
    }

export {AppVista};