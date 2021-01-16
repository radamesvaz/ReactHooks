import { shallow } from 'enzyme';
import React from 'react';
import { AddTodo } from '../../../components/08-useReducer/AddTodo';
 
describe('Haciendo pruebas sobre el componente <AddTodo />', () => {

    const handleAddTodo = jest.fn()

    const wrapper = shallow(
        <AddTodo 
            handleAddTodo={ handleAddTodo }
        />
    )

    test('Debe de mostrar el componente correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('NO debe de llamar la función handleAddTodo ', () => {
        
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault(){} });

        // const formSubmit = wrapper.find('form').prop('onSubmit');
            //  Esta es otra forma de simular el submit del formulario y llamar la función que tiene el handleAddTodo
        // formSubmit({ preventDefault(){} })

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
        //expect( handleAgregar ).not.toHaveBeenCalled();
    });

    test('debe de llamar la función handleAddTodo ', () => {
        const input = wrapper.find('input');

        const value = 'Soy Batman'; 
     
        input.simulate('change', {
            target: {
                name: 'desc',
                value
            }
        });

        const form = wrapper.find('form');  //  Hay que buscar el formulario luego de que se le hace el cambio al input
        form.simulate('submit', { preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),     //  Asi le decimos a Jest que ese valor tiene que estar y qué tipo de dato tiene que ser, útil para cuando el valor siempre cambie
            desc: value,
            done: false
        });

        expect( wrapper.find('input').prop('value') ).toBe('')
    })
    
    
    
})
