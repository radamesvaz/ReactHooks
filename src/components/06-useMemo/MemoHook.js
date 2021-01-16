import React, { useMemo, useState } from 'react';
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

import '../02-useEffect/effect.css';


export const MemoHook = () => {

    const { counter, increment } = useCounter(600);

    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3> <small> { counter } </small>   </h3>
            <hr />

            <p> { memoProcesoPesado } </p>

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
 Aquí tenemos el mismo ejemplo pero esta vez usamos el hook useMemo como solución para no volver a ejecutar la función de procesoPesado() si sus PROPS no cambian
 Nótese que en el arreglo de dependencia, indicamos qué lo va a volver a ejecutar de nuevo, como el useEffect
*/
