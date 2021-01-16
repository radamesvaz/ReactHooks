import React, { useContext } from 'react';
import { UserContext } from './UserContext';

import './style.css';

export const AboutScreen = () => {

    const { user, setUser} = useContext(UserContext);

    const handleLogOut = () => setUser({});

    return (
        <div>
            <h1>About Screen</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>

            <button
                className="btn btn-danger"
                onClick={ handleLogOut }
            >
                Logout
            </button>
        </div>
    )
}
 