import React from 'react';
import './InputSeachLista.css';
import { compListaContexto } from '..';


function InputSeachLista(props) {

  const {searchValue, setsSearchValue } = React.useContext(compListaContexto);

    return (
      <input className='input-search-Lista' 
      type="text"
      value={searchValue}
      onChange={(event) => {
        setsSearchValue(event.target.value);  
      }}
      />
    );
  }

export {InputSeachLista};