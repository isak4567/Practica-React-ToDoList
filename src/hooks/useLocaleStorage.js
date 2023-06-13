
import React from "react";

// const defaultLista = [
//   {terminado: true, text: '!!!!!!!!!'},
//   {terminado: false, text: ' text cccccccccccse.'},
//   {terminado: false, text: '!!!!!!!!!!!!!!!!!!!!!!!!'},
//   {terminado: false, text: ' C T.'},
//   {terminado: false, text: ' C GG.'},
//   {terminado: true, text: ' sueñito'},
//   {terminado: false, text: ' ggggg'},
// ];

// localStorage.setItem('lista', JSON.stringify(defaultLista));

// localStorage.removeItem("lista");

function useLocaleStorage(nameItem, initialValue) {


  // Lista setStorage
  const [item, setItem] = React.useState(initialValue);

  const [loading, setloading] = React.useState(true);
  const [error, seterror] = React.useState(false);

  React.useEffect(()=> {

    setTimeout(() => {  
      try {
        const clocalStorage = localStorage.getItem(nameItem);
      
        let parsedList = JSON.parse(clocalStorage);
  
        if (!parsedList) {
          localStorage.setItem(nameItem, JSON.stringify(initialValue));
          parsedList = initialValue;
        }  else {
          setItem(parsedList);
          setloading(false);
        }
  
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(true);
      }
    }, 2000);

  }, []);
  
  const saveItem = (copiaItem) => {
    setItem(copiaItem);
    localStorage.setItem(nameItem, JSON.stringify(copiaItem));
  }
    
  return {item, saveItem, loading, error,};
}

  export {useLocaleStorage};