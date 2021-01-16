import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";


describe('Haciendo pruebas sobre el reducer todoReducer', () => {
    
    test('debe de retornar el valor por defecto ', () => {
        
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos)
    });

    test('debe de agregar un todo ', () => {
        
        const newTodo = {
            id: 3,
            desc: 'Irme de esta verga',
            done: false
        };

        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: newTodo
        });

        expect( state ).toEqual([...demoTodos, newTodo])
    });

    test('debe de eliminar un todo ', () => {

        const id = 2;
        
        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: id
        });

        expect( state.length ).toBe( demoTodos.length - 1 );
        expect(state).toEqual( [demoTodos[0]] )
    });

    test('debe de hacer el TOGGLE de un todo ', () => {

        const id = 2;
        
        const state = todoReducer(demoTodos, {
            type: 'toggle',
            payload: id
        });

        expect( state[id - 1].done ).toBe(!demoTodos[id - 1].done) // Se le coloca el -1 al id porque toca recordar que los arrays comienzan de 0
    })
    
    

    
    
})
