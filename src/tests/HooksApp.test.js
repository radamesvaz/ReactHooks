import React from 'react';
import { shallow } from "enzyme"
import { HooksApp } from "../HooksApp"

describe('Haciendo pruebas sobre el componente <HookApp />', () => {
    
    test('Debe de mostrar el componente correctamente ', () => {
        
        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();
    })
    
})
