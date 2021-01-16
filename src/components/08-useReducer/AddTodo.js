import React from 'react'
import { useForm } from '../../hooks/useForm'

export const AddTodo = ({ handleAddTodo }) => {

    const [ { desc }, handleInputChange, reset ] = useForm({
        desc: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(desc.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            name="desc"
            placeholder="Agregar..."
            className="form-control"
            autoComplete="off"
            onChange={ handleInputChange }
            value={desc}
        />

        <button
            type="submit"
            className="btn btn-outline-primary mt-1 btn-block"
        >
            Agregar
        </button>

    </form>
    )
}
