import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente <HomeScreen />', () => {

    const user = {
        name: 'batman',
        email: 'alfred@gmail.com'
    }

    const wrapper = mount(      // Se usa el mount en lugar del shallow porque el mount corre todo correctamente, especialmente los higher order components, que es lo que es el CONTEXT

        <UserContext.Provider value = {{
            user            //  Igual que con el componente, hay que crear el contexto, sus valores
        }} >
            <HomeScreen />
        </ UserContext.Provider>
    )
    
    test('debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot()
    })
    
})
