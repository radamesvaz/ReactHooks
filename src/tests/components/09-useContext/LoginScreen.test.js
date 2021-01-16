import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Haciendo pruebas sobre el componente <LoginScreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('debe de ejecutar el setUser con el argumento esperado ', () => {
        
        const button = wrapper.find('button');
        button.simulate('click');

        expect( setUser ).toHaveBeenCalled();
        expect( setUser ).toHaveBeenCalledWith( {
            id: '007',
            name: 'Radames'
        } )
    })
    
    
})
