import React from 'react';
import { useForm } from '../../hooks/useForm';

import './effect.css';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <form onSubmit = { handleSubmit }>
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

            <div className="form-group">
                <input 
                type="password"
                name="password"
                placeholder="*****"
                value={ password }
                onChange = { handleInputChange }
                />
            </div>

            <button type="submit">
                Enviar
            </button>

        </form>
    )
}
