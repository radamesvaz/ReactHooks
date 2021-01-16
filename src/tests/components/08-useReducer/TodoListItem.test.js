import React from 'react';
import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from '../../fixtures/demoTodos';
import "@testing-library/jest-dom";

describe('Haciendo pruebas sobre el componente <TodoListItem />', () => {

    const handleDeleteItem = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(
        <TodoListItem 
            todo = { demoTodos[0] }
            index = { demoTodos[0].id }
            handleDeleteItem = { handleDeleteItem}
            handleToggle = { handleToggle}
        />
    );

    test('debe de mostrarse correctamente ', () => {
    
        expect(wrapper).toMatchSnapshot()
    })

    test('debe llamar la función handleDelete ', () => {
        const buttonDelete = wrapper.find('button');
        
        buttonDelete.simulate('click', demoTodos[0].id);
        expect( handleDeleteItem ).toHaveBeenCalledWith( expect.any(Number) );
        expect( handleDeleteItem ).toHaveBeenCalledWith( demoTodos[0].id )
    })

    test('debe llamar la función handleToggle ', () => {
        
        const pToggle = wrapper.find('p');

        pToggle.simulate('click', demoTodos[0].id);
        expect( handleToggle ).toHaveBeenCalledWith( expect.any(Number) )
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id )
    })
    
    test('debe de mostrar el texto correctamente ', () => {
        const pText = wrapper.find('p').text().trim();
        
        expect(pText).toBe(`${demoTodos[0].id + 1}. ${demoTodos[0].desc}`)

    })

    test('debe de mostrar la clase completada con un todo realizado ', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo = { demoTodos[0] }
                index = { demoTodos[0].id }
                handleDeleteItem = { handleDeleteItem}
                handleToggle = { handleToggle}
            />
        );

        expect( wrapper.find('p').hasClass('complete') ).toBe(true)

    })
    
    
    
})
