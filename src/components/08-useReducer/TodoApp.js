import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

import './style.css';


// Si no se consiguen items con el key value 'todos' se va a devolver un arreglo vacío como estado por defecto
const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    // console.log(todos)
    // console.log(desc)

    //  Este useEffect se va a disparar cada vez que haya cualquier cambio en los todos, y los va a guardar en el sessionStorage
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDeleteItem = ( todoId ) => {
        //  Crear la acción
        const action = {
            type: 'delete',
            payload: todoId
        }

        //  dispatch    
        dispatch(action);
    }

    const handleToggle = ( todoId ) => {
        //  el dispatch también puede enviarse asi:
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return (
        <div>
            <h1>TodoApp: { todos.length } </h1>
            <hr />

        <div className="row">

            <div className="col-7">
                Todos
                {/* Aquí va ir un componente TodoList, se le pasan los todos (estado) handleDelete handleToggle */}
            <TodoList 
                todos={todos} 
                handleDeleteItem={handleDeleteItem} 
                handleToggle={handleToggle} 
            />

            </div>

            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />
                <AddTodo 
                    handleAddTodo={ handleAddTodo } 
                />
            </div>

        </div>

        </div>
    )
}

/* 
    Hay mucho que decir aquí, esta lección me costo. Pero el punto principal de la clase es el useReducer: Recibe la función reducer como primer argumento
    el estado inicial como segundo argumento, y un tercer argumento que es opcional, y es la inicialización de una función que va a retornar el estado inicial del reducer.

    RECORDAR: cada vez que hay un cambio en el estado, react vuelve a ejecutar lo que se encuentra arriba del return a ver si hay cambios importantes. Quitar comentarios de los console.log
    para observar mejor en líneas 15 y 16. Repasar el uso del useForm

    Como el sessionStorage solamente acepta strings, hay que aplicarle el json.stringify(). Y para recuperar el objeto en su estado normal, se usa el json.parse()

    VIDEO: 128
*/
