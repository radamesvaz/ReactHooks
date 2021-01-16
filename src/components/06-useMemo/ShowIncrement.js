import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('me volvieron a cargar D:')

    return (
        <button
            className = "btn btn-outline-primary"
            onClick = { () => increment(2) }
        >
            +1
        </button>
    )
})

/*
 Aquí envolvemos todo el componente con el memo porque recibe la función del useCallback
*/
