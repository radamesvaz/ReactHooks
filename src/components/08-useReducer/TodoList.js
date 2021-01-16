import React from 'react';
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDeleteItem, handleToggle }) => {
    return (
        <ul>
            {
                todos.map( (todo, index) => (
                    <TodoListItem 
                        key={todo.id}
                        todo={todo}
                        index={index}
                        handleDeleteItem={handleDeleteItem}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}