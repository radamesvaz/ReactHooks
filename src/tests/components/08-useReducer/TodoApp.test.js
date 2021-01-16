import React from 'react';
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Haciendo pruebas sobre el componente <TodoApp />', () => {
    
    const wrapper = shallow(
        <TodoApp />
    );

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot()
        
    });

    test('debe de agregar un TODO ', () => {
        
        const wrapper = mount( <TodoApp />);

        act( () => {
            wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[1]);
        })

        expect( wrapper.find('h1').text().trim() ).toBe( 'TodoApp: 2' );
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2)

    });
    
    test('debe de eliminar un TODO ', () => {
        
        wrapper.find('AddTodo').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDeleteItem')(demoTodos[0].id);

        expect( wrapper.find('h1').text().trim() ).toBe( 'TodoApp: 0' );


    })
    
})
