import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect( () => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(res => res.json())
            .then(data => {
                     isMounted.current && (
                         setState( prevState => ({
                             ...prevState,
                             data,
                             loading: false
                         }) 
                        )
                     )

            })
            .catch( () => {
                setState( prevState => ({
                    data: null,
                    loading: true,
                    error: 'No se pudo buscar la informacion'
                }))
            })
    }, [ url ])

    return state;
}

/*  
    VIDEO: 114 useRef - Caso de uso real

    Varias cosas que anotar en este hook: El useRef nos sirve para mantener la referencia a una variable SIN renderizar de nuevo el componente.
    Ejemplo en el primer useEffect (Recordar Dimedisa y el window.unload) cambiamos el valor de la variable isMounted en la función de cleanup
    y después se comprueba el valor de esa variable cuando se tiene la data del fetch: Línea 31.
    Si todavía el componente esta montado (TRUE) entonces se cambia el estado y se renderiza el componente, de lo contrario no se hace nada y se evitan errores
    al querer renderizar un componente que fue desmontado.

    Importante: la función cleanup debería ir en el segundo useEffect, pero se creó uno nuevo para observar el ejercicio claramente
*/