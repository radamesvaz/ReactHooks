import React from 'react';
import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');



describe('Haciendo pruebas sobre el componente <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter: 2,
        increment: () => {}
    })
    
    test('debe de mostrar el componente correctamente ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: false
        })
        
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar la información conseguida del useFetch ', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Radames',
                quote: 'Quiero irme de aquí'
            }],
            loading: false,
            error: false
        })

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();

        expect( wrapper.find('.alert-info').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Quiero irme de aquí')

    })
    
    
})
