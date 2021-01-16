import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effect.css';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const { name, email } = form;

    useEffect( () => {
        //console.log('useEffect vivo')
    }, [])

    const handleInputChange = ({ target }) => {

        setForm( prevState => ({
            ...prevState,
            [ target.name ]: target.value
            })
         )
    } 

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                type="text"
                name="name"
                placeholder="Nombre aqui..."
                autoComplete="off"
                value={ name }
                onChange = { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="email"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange = { handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> } 
            {/* // Operador ternario: Si el valor del nombre es 123 entonces que se muestre el otro componente. Solamente evalua ese caso */}
        </>
    )
}
