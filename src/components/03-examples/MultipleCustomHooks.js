import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
  
import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`

    const  { loading, data }  = useFetch( url );

    const { quote, author } = !!data && data[0];    // Convertimos el null en doble negación para evaluar si existe y asi asignar las variables


    return (
        <div>
            <h1>Multiples hooks</h1>
            <hr />

            {/* {
                loading ? <p>Cargando Cita...</p> : <h3>{data[0].quote}</h3>
            } */}

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> {quote} </p>
                            <hr />
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                    )
            }
            <button 
                className = "btn btn-primary"
                onClick = { increment }
            >
                Siguiente cita
            </button>

        </div>
    )
}
