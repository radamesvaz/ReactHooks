import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Haciendo pruebas sobre el componente <AppRouter />', () => {
    
    const user = {
        id: '07',
        name: 'batman'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }} >
            <AppRouter />
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
})
