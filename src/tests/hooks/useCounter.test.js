import { render } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks"
import { useCounter } from "../../hooks/useCounter"


describe('pruebas sobre el hook useCounter', () => {


    test('debe de retornar valores por defecto ', () => {

        const { result } = renderHook( () => useCounter() );
        
        expect(  result.current.counter).toBe(10)
        expect( typeof result.current.increment).toBe('function')
        expect( typeof result.current.decrement).toBe('function')
        expect( typeof result.current.reset).toBe('function')
    })

    test('debe de retornar el valor del counter en 51 ', () => {

        const { result } = renderHook( () => useCounter(51) );
        expect(result.current.counter).toBe(51)
    })
        
    test('debe de incrementar el valor del counter por 1 ', () => {
        
        const { result } = renderHook( () => useCounter(51) );
        const { increment } = result.current;
        
        act( () => {    //  dentro del act es que podemos llamar las funciones que queremos probar, no pueden llamarse función()

            increment();

        })

        expect(result.current.counter).toBe(52)
    })
    
    test('debe de restar el valor del counter por 1 ', () => {
        
        const { result } = renderHook( () => useCounter(51) );
        const { decrement } = result.current;

        act( () => {

            decrement();

        })

        const { counter } = result.current;

        expect( counter ).toBe(50)

    })
    
    test('debe de volver el contador a su estado inicial luego de que se le aplique un estímulo ', () => {
        
        const { result } = renderHook( () => useCounter(51) );
        const { increment, reset } = result.current;

        act( () => {

            increment();
            reset();

        })

        expect(result.current.counter).toBe(51)

    })
    

})
