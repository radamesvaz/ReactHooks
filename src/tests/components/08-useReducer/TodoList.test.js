import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Haciendo pruebas sobre el componente <TodoList />', () => {
    
    const handleDeleteItem = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={ demoTodos }
            handleDeleteItem={ handleDeleteItem }
            handleToggle={ handleToggle }
        />
    )


    test('debe mostrar el componente correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener dos <TodoListItem /> ', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );

        expect( wrapper.find('TodoListItem').at(0).prop('handleDeleteItem') ).toEqual( expect.any(Function) )
    })
    
    
})
