import React from "react";
import { IconLista } from "./IconsLista";

function IconDelete(props) {
    return (
        <IconLista 
       type={'delete'}
       color={'#30d1ed'}
       onIN={props.onInIt}
       />
    );
  }

  export {IconDelete};