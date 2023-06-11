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
  
    let parsedList = JSON.parse(localStorage.getItem(nameItem));
  
    if (!parsedList) {
      localStorage.setItem(nameItem, JSON.stringify(initialValue));
      parsedList = [];
    } 
  
    // Lista setStorage
    const [item, setItem] = React.useState(parsedList);
  
    const saveItem = (copiaItem) => {
      setItem(copiaItem);
      localStorage.setItem(nameItem, JSON.stringify(copiaItem));
    }
    
    return [item, saveItem];
  }