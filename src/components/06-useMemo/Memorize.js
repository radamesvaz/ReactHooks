import React, { useState } from 'react';
import { useCounter } from "../../hooks/useCounter";
import { Small } from './Small';

import '../02-useEffect/effect.css';


export const Memorize = () => {

    const { counter, increment } = useCounter(4);

    const [show, setShow] = useState(true)


    return (
        <div>
            <h1>Memorize</h1>
            <h3> <Small value={ counter } /> </h3>
            <hr />

            <button
                className = "btn btn-outline-primary" 
                onClick = { increment }
            >
                +1
            </button>

            <button
                className = "btn btn-outline-secondary m-5"
                onClick = { () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}

/*
 En este componente tenemos 2 estados: El estado del counter y el estado del show.
 Cuando cualquiera de esos 2 estados cambie ( en este caso lo forzamos con el show ), React volverá a renderizar todo el componente, en este ejemplo usamos a <Small />
 Si fuese una petición https:// se volvería a disparar siempre cambie algún estado, y por eso se usa el Memo en el componente que no que tendría dicha petición o tarea

 Ver componente <Small />

 VIDEO: 116 Memo - Método de React
*/
