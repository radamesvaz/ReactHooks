import React, { useCallback, useState } from 'react';
import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(23);

    // const increment = () => setCounter( prevCounter => prevCounter + 1)

    const increment = useCallback( (num) => {
        setCounter( prevCounter => prevCounter + num);
    }, [ setCounter ])

    return (
        <div>
            <h1>Callback Componente</h1>
            <hr />

            <h3>Counter { counter } </h3>

            <ShowIncrement increment = { increment } />
        </div>
    )
}

/*
 Este hook esta algo confuso, pero se utiliza cuando se le quiere mandar una función como prop a un componente hijo
 comentado se encuentra el increment normal de un contador que hemos usado a lo largo de la clase, el problema es que
 el hijo se renderiza siempre que hay un cambio en el estado del padre que en este caso sería el contador, pero en el hijo nada ha cambiado. La función sigue siendo la misma
 
 Lo que sucede es que cuando el componente padre carga de nuevo, vuelve a cargar la función de increment() y la almacena en un espacio de memoria diferente al que le mandó la referencia al hijo
 entonces pareciera que recibiera una función diferente, pero no es asi. Para evitar esa renderizacion inútil, tenemos el useCallback que va de la mano con el memo.

 el useCallback recibe la función a enviar como argumento, y la dependencia en este caso será más que todo para tener la referencia en el lugar de memoria que se le asignó al principio.

 Y el argumento de la función se recibe normalmente, ver NUM línea 11

 VIDEO: 118 useCallback

*/