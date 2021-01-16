import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(66);

    return (
        <>
            <h1>Counter Custom Hook { state }</h1>
            <hr />

             {/* !importante: Si las funciones ejecutaran su codigo con el Event, solamente se les pasa la referencia y no se hace con sintaxis de callback
              Ejemplo  { increment } 
              Si la funcion recibe un argumento que NO es el event, se les llama asi y se les pasa el argumento, si no reciben argumento se colocan los () igual: */}

            <button onClick = { () => increment(2) } className="btn btn-primary"> +1 </button>
            <button onClick = { reset } className="btn btn-primary"> Reset </button>
            <button onClick = { () => decrement (2)} className="btn btn-primary"> -1 </button>
        </>
    )
}
