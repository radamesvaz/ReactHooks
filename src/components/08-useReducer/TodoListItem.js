import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleDeleteItem, handleToggle }) => {
    return (
        <li className="list-group-item">
            <p
                className={` ${todo.done && 'complete'} `}
                onClick={ () => handleToggle(todo.id) }
            >
               {index + 1}. {todo.desc}
            </p>

            <button
                className="btn btn-danger"
                onClick={ () => handleDeleteItem(todo.id) }
            >
                Eliminar
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}