const initialState = [{
    id: 1,
    todo: 'Irse de venezuela',
    status: false
}],

 /*const*/ todosReducer = ( state = initialState, action ) => {

    if(action?.type) return [...state, action.payload]

    return state
}

const newTodo = [{
    id: 2,
    todo: 'Ganar plata',
    status: false
}];

const reducerAction = {
    type: 'agregar',
    payload: newTodo
}

let todo = todosReducer();

todo = todosReducer(initialState, reducerAction)



console.log(todo)