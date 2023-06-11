import React from "react";
import { ReactComponent as IconS } from "./gSuccess.svg";
import { ReactComponent as IconD } from "./bDelete.svg";
import './iconLista.css'

 const iconos = {
    "success": (color)=> <IconS fill={color}  />,
    "delete": (color)=> <IconD fill={color} />
 }

function IconLista({type, color, mostrar, onIN}) {
    return (
       <span className={`icon icon-${type} ${mostrar}`} onClick={onIN} >
        {iconos[type](color)}
       </span>
    );
  }

  export {IconLista};