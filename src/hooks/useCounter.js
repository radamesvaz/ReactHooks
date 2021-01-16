import { useState } from "react"

export const useCounter = ( defaultState = 10 ) => {

    const [counter, setCounter] = useState( defaultState );

    const increment = () => {
        setCounter( prevState => prevState + 1 )
    }

    // const decrement = (factor = 1) => {
    const decrement = () => {
        setCounter( prevState => prevState - 1 )
    }

    const reset = () =>{
        setCounter( defaultState )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
