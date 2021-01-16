
import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from "../../hooks/useForm"

describe('Haciendo pruebas sobre el hook useForm', () => {
    
    const initialForm = {
        name: 'Radames',
        email: 'batman@gmail.com'
    }

    test('debe de regresar un formulario por defecto ', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        
        const [ form, handleInputChange, reset ] = result.current
        
        expect(form).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function')
        expect( typeof reset ).toBe('function')
    })

    test('debe de cambiar el valor del formulario (cambiar name) ', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange ] = result.current;
        const value = 'batman';

        act( () => {
            handleInputChange({ target: {
                name: 'name',                   // Recordar que la función recibe un objeto que contiene un target, y en el target se asignan los valores que se van a trabajar
                value
            }})
        })

        const [ form ] = result.current;

        expect(form).toEqual({
            name: 'batman',
            email: 'batman@gmail.com'
        })

        expect(form).toEqual({ ...initialForm, name: value })
    })

    test('debe de re-establecer el formulario con RESET ', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
        const value = 'batman';

        act( () => {
            handleInputChange({ target: {
                name: 'name',
                value
            } })
        })

        act( () => {
            reset()
        })

        const [ form ] = result.current;

        expect(form).toEqual(initialForm)
    })
    
    
    
})
