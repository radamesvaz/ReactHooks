import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState);
    // console.log(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setValues(prevValues => ({
            ...prevValues,
            [ target.name ]: target.value
        }))
    } 

    return [values, handleInputChange, reset]
}

// El reset va a devolver el estado a como fue recibido
