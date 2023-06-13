
import React from 'react';
import { AppVista } from './AppVista';
import { ProviderLista } from '../Contexto';


function App() {
  return (
    <ProviderLista >
      <AppVista/>
    </ProviderLista>
  );
}


export default App;
