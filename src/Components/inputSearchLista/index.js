import React from 'react';
import './InputSeachLista.css'

function InputSeachLista(props) {


    return (
      <input className='input-search-Lista' 
      type="text" placeholder={props.plc}
      value={props.searchValue}
      onChange={(event) => {
        props.setsSearchValue(event.target.value);  
      }}
      />
    );
  }

export {InputSeachLista};