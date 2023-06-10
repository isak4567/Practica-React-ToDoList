import React from "react";
import { IconLista } from "./IconsLista";


function IconSuccess(props) {
    return (
       <IconLista 
       type={'success'}
       color={'#30d1ed'}
       mostrar={props.mostrar}
       onIn={props.onInIt}
       />
    );
  }

  export {IconSuccess};