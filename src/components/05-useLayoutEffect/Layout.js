import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effect.css';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

    const  { data }  = useFetch( url );

    const { quote } = !!data && data[0];    // Convertimos el null en doble negación para evaluar si existe y asi asignar las variables

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect( () => {

        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])


    return (
        <div>
            <h1>Layout Effects</h1>
            <hr />

            {/* {
                loading ? <p>Cargando Cita...</p> : <h3>{data[0].quote}</h3>
            } */}

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref = { pTag }
                >
                {quote}
                </p>

                <hr />
            </blockquote>

            <button 
                className = "btn btn-primary"
                onClick = { increment }
            >
                Siguiente cita
            </button>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

        </div>
    )
}
