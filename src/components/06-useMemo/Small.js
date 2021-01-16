import React from 'react'
// import React, { memo } from 'react';

export const Small = React.memo(({ value }) => {
    console.log('me volvieron a llamar D:')
    return (
        <small> { value } </small>
    )
})

/*
 En este componente se usa el memo, Se llama antes de definir los PROPS y encierra el componente entero, nótese el paréntesis de cierre en la línea 9.
 Solamente si las PROPS cambian volverá a renderizar, caso contrario usará la versión MEMOrizada cuando tenga que dibujar algo ( Quitar el React.memo para pruebas )
 VIDEO: 116 Memo - Método de React
*/