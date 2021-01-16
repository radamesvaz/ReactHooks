import React, { useContext } from 'react';
import { UserContext } from './UserContext';

import './style.css';

export const LoginScreen = () => {

    const { setUser} = useContext(UserContext)
    
    const usuarioIngresado = {
        id: '007',
        name: 'Radames'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-outline-primary"
                onClick={ () => setUser(usuarioIngresado)}
            >
                Iniciar Sesión
            </button>
        </div>
    )
}
